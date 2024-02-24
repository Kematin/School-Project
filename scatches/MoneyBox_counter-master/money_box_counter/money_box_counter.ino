/*
  Электронный распознаватель монет (по размеру) для копилки со счётчиком суммы и статистикой по каждому типу монет.
  Функционал:
  Распознавание размера монет с высокой точностью и его привязка к стоимости каждой монеты
  Вычисление общей суммы монет в копилке
  Статистика по числу монет каждого типа
  Все настройки сохраняются в энергонезависимую память и не сбрасываются при питании
  Накопленная сумма тоже хранится в энергонезависимой памяти и не боится сбоев питания
  Режим глубокого энергосбережения: в спящем режиме потребляется 0.07 мА, в схеме без преобразователя 0.02 мА
  Поддержка любого числа монет разного размера
  Автоматическая калибровка типов монет
  Сброс накопленного количества
*/

// НАСТРОЙКИ КУПЮРЫ
#define s0 12 // (4 to 12)
#define s1 11 // (5 to 11)
#define s2 10 // (6 to 10)
#define s3 9 // (7 to 9)
#define outPin 8 // (16 to 8)
#define color_power_pin 7 // питание tcs3200 (13 to 7) + 220 OM for led pin

#define button 2      // кнопка "проснуться" (2 to 16)
#define nominalButton 3 // (15 to 14)
#define selectButton 4 // (10 to 15)
#define calibr_button 6  // скрытая кнопка калибровкии сброса (3 to 6)

#define disp_power 17    // питание дисплея (12 to 17 (18,19-i2c))
#define LEDpin 14       // питание светодиода (11 to 3) + 220 OM
#define IRpin 15 // питание фототранзистора (17 to 5)
#define IRsens 20       // сигнал фототранзистора (14 to 5)

boolean DEBUG = true;

// Variables
int red;
int grn;
int blu;int count = 0;
int sum_nominal = 0;
long startTiming = 0;
long elapsedTime = 0;
long displayNominalTime = 0;
String nominalDisplay = "";
byte nominalState = 1;
long updateDisplay;



//-------НАСТРОЙКИ---------
#define coin_amount 5    // число монет, которые нужно распознать
#define nominalCount 5    // число купюр, которые нужно распознать
float coin_value[coin_amount] = {0.5, 1.0, 2.0, 5.0, 10.0};  // стоимость монет
String currency = "RUB"; // валюта (английские буквы!!!)
int stb_time = 10000;    // время бездействия, через которое система уйдёт в сон (миллисекунды)
//-------НАСТРОЙКИ---------

int coin_signal[coin_amount];    // тут хранится значение сигнала для каждого размера монет
int coin_quantity[coin_amount];  // количество монет
int nominalQuantity[nominalCount];  // количество купюр
int nominalValues[nominalCount] = {50, 100, 500, 1000, 5000};  // номинал купюр
byte empty_signal;               // храним уровень пустого сигнала
unsigned long standby_timer, reset_timer; // таймеры
float summ_money = 0;            // сумма монет в копилке

//-------БИБЛИОТЕКИ---------
#include "LowPower.h"
#include "EEPROMex.h"
#include "LCD_1602_RUS.h"
//-------БИБЛИОТЕКИ---------

LCD_1602_RUS lcd(0x27, 16, 2);            // создать дисплей
// если дисплей не работает, замени 0x27 на 0x3f

boolean recogn_flag, sleep_flag = true;   // флажки
//-------КНОПКИ---------
//-------КНОПКИ---------
int sens_signal, last_sens_signal;
boolean coin_flag = false;

void setup() {
  Serial.begin(9600);    
  pinMode(disp_power, OUTPUT);
  pinMode(color_power_pin, OUTPUT);
  digitalWrite(disp_power, 1);
  digitalWrite(color_power_pin, 1);

  pinMode(s0, OUTPUT);
  pinMode(s1, OUTPUT);
  pinMode(s2, OUTPUT);
  pinMode(s3, OUTPUT);
  pinMode(nominalButton, INPUT_PULLUP);
  pinMode(selectButton, INPUT_PULLUP);
  pinMode(outPin, INPUT); //выход из датчика становится входом в Arduino

  // Установка масштабирования частоты до 100%
  digitalWrite(s0,HIGH);
  digitalWrite(s1,HIGH);

  // подтягиваем кнопки
  pinMode(button, INPUT_PULLUP);
  pinMode(calibr_button, INPUT_PULLUP);

  // пины питания как выходы
  pinMode(disp_power, OUTPUT);
  pinMode(LEDpin, OUTPUT);
  pinMode(IRpin, OUTPUT);

  // подать питание на дисплей и датчик
  digitalWrite(disp_power, 1);
  digitalWrite(LEDpin, 1);
  digitalWrite(IRpin, 1);

  // подключить прерывание
  attachInterrupt(0, wake_up, CHANGE);

  empty_signal = analogRead(IRsens);  // считать пустой (опорный) сигнал

  // инициализация дисплея
  lcd.init();
  lcd.backlight();

  if (!digitalRead(calibr_button)) {  // если при запуске нажата кнопка калибровки
    Serial.println("НАЧАЛО КАЛИБРОВКИ");
    lcd.clear();
    lcd.setCursor(3, 0);
    lcd.print(L"Сервис");
    delay(500);
    reset_timer = millis();
    while (1) {                                   // бесконечный цикл
      if (millis() - reset_timer > 3000) {        // если кнопка всё ещё удерживается и прошло 3 секунды
        // очистить количество монет
        for (byte i = 0; i < coin_amount; i++) {
          coin_quantity[i] = 0;
          EEPROM.writeInt(20 + i * 2, 0);
        }
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print(L"Память очищена");
        Serial.println("ПАМЯТЬ ОЧИЩЕНА");
        delay(100);
      }
      if (digitalRead(calibr_button)) {   // если отпустили кнопку, перейти к калибровке
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print(L"Калибровка");
        Serial.println("КАЛИБРОВКА");
        break;
      }
    }
    while (1) {
      for (byte i = 0; i < coin_amount; i++) {
        Serial.print("НУЖНО БРОСИТЬ - ");Serial.println(coin_value[i]);
        lcd.setCursor(0, 1); lcd.print(coin_value[i]);  // отобразить цену монеты, размер которой калибруется
        lcd.setCursor(13, 1); lcd.print(currency);      // отобразить валюту
        last_sens_signal = empty_signal;
        while (1) {
          sens_signal = analogRead(IRsens);     
          Serial.print("СИГНАЛ ФОТОРЕЗИСТОРА - ");Serial.println(sens_signal);                               // считать датчик
          if (sens_signal > last_sens_signal) last_sens_signal = sens_signal;  // если текущее значение больше предыдущего
          if (sens_signal - empty_signal > 3) coin_flag = true;                // если значение упало почти до "пустого", считать что монета улетела
          if (coin_flag && (abs(sens_signal - empty_signal)) < 2) {            // если монета точно улетела
            coin_signal[i] = last_sens_signal;                                 // записать максимальное значение в память
            EEPROM.writeInt(i * 2, coin_signal[i]);
            coin_flag = false;
            break;
          }
        }
      }
      break;
    }
  }

  // при старте системы считать из памяти сигналы монет для дальнейшей работы, а также их количество в банке
  sum_money();

  /*
    // для отладки, вывести сигналы монет в порт
    for (byte i = 0; i < coin_amount; i++) {
      Serial.println(coin_signal[i]);
    }
  */
  standby_timer = millis();  // обнулить таймер ухода в сон
}

void loop() {
  if (sleep_flag) {  // если проснулись  после сна, инициализировать дисплей и вывести текст, сумму и валюту
    delay(500);
    lcd.init();
    lcd.clear();
    lcd.setCursor(0, 0); lcd.print(L"На компьютер");
    lcd.setCursor(0, 1); lcd.print(summ_money);
    lcd.setCursor(13, 1); lcd.print(currency);
    empty_signal = analogRead(IRsens);
    sleep_flag = false;
  }

  // далее работаем в бесконечном цикле
  last_sens_signal = empty_signal;
  while (1) {
    getColor();
    sens_signal = analogRead(IRsens);  // далее такой же алгоритм, как при калибровке
    if (sens_signal < 100) {
      getCoin();
      break;
    }

    // если ничего не делали, времят аймера вышло, спим
    if (millis() - standby_timer > stb_time) {
      good_night();
      break;
    }

    // если монетка вставлена (замыкает контакты) и удерживается 2,5,6 секунды
    while (!digitalRead(button)) {
      if (millis() - standby_timer > 5000) {
        lcd.clear();

        // отобразить на дисплее: номиналы
        for (byte i = 0; i < 4; i++) {
          lcd.setCursor(i*4, 0); lcd.print((int)nominalValues[i]);
          lcd.setCursor(i*4, 1); lcd.print(nominalQuantity[i]);
        }

        delay(5000);
      } if (millis() - standby_timer > 6000) {
        lcd.clear();

        lcd.setCursor(0, 0); lcd.print((int)nominalValues[4]);
        lcd.setCursor(1, 1); lcd.print(nominalQuantity[4]);

        delay(5000);
        standby_timer = millis();  // сбросить таймер
      } if (millis() - standby_timer > 2000) {
        lcd.clear();

        // отобразить на дисплее: сверху цены монет (округлено до целых!!!!), снизу их количество
        for (byte i = 0; i < coin_amount; i++) {
          lcd.setCursor(i * 3, 0); lcd.print((int)coin_value[i]);
          lcd.setCursor(i * 3, 1); lcd.print(coin_quantity[i]);
        }
        delay(5000);
      }
    }
    if (millis()-updateDisplay > 1500) {
      displayMoney();
      updateDisplay = millis();
    }
  }
}

void displayMoney() {
  sum_money();
  delay(1000);
  lcd.clear();
  lcd.setCursor(0, 0); lcd.print(L"На компьютер");
  lcd.setCursor(0, 1); lcd.print(summ_money);
  lcd.setCursor(13, 1); lcd.print(currency);
}

void sum_money() {
  summ_money = 0;
  for (byte i = 0; i < coin_amount; i++) {
    coin_signal[i] = EEPROM.readInt(i * 2);
    coin_quantity[i] = EEPROM.readInt(20 + i * 2);
    summ_money += coin_quantity[i] * coin_value[i];  // ну и сумму сразу посчитать, как произведение цены монеты на количество
    summ_money += nominalQuantity[i] * nominalValues[i];
  }  
}

// функция сна
void good_night() {
  Serial.println("GOOD NIGHT");
  // перед тем как пойти спать, записываем в EEPROM новые полученные количества монет по адресам начиная с 20го (пук кек)
  for (byte i = 0; i < coin_amount; i++) {
    EEPROM.updateInt(20 + i * 2, coin_quantity[i]);
  }
  sleep_flag = true;
  // вырубить питание со всех дисплеев и датчиков
  digitalWrite(disp_power, 0);
  digitalWrite(LEDpin, 0);
  digitalWrite(IRpin, 0);
  digitalWrite(color_power_pin, 0);
  digitalWrite(s0, 0);
  digitalWrite(s1, 0);
  delay(100);
  // и вот теперь спать
  LowPower.powerDown(SLEEP_FOREVER, ADC_OFF, BOD_OFF);
}

// просыпаемся по ПРЕРЫВАНИЮ (эта функция - обработчик прерывания)
void wake_up() {
  Serial.println("WAKE UP");
  // возвращаем питание на дисплей и датчик
  digitalWrite(disp_power, 1);
  digitalWrite(LEDpin, 1);
  digitalWrite(IRpin, 1);
  digitalWrite(color_power_pin, 1);
  digitalWrite(s0, 1);
  digitalWrite(s1, 1);
  standby_timer = millis();  // и обнуляем таймер
}
