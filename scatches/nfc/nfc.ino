#include <SPI.h> //подключаем библиотеку
#include <MFRC522.h> //подключаем библиотеку №2
#define successLed 14
#define blockedLed 15
MFRC522 mfrc522(10, 9); //указываем порты подключения модуля и называем его "mfrc522"

void setup() {
  Serial.begin(9600); //инициализируем последовательный порт на скорости 9600бод
  SPI.begin(); //инициализируем интерфейс
  pinMode(successLed, OUTPUT); //указываем режим порта, как выход
  pinMode(blockedLed, OUTPUT); //указываем режим порта, как выход
  mfrc522.PCD_Init();
  Serial.println("INIT RFID");
}
void loop() {
  byte uidCard[4] = {0xB3, 0xA6, 0xBB, 0x11}; //указываем номер "ключ" карты "у каждого индивидуальный"
  if ( ! mfrc522.PICC_IsNewCardPresent()) { //если новой карты нет, то перезапустить цикл "void loop"
    return;
  }
  if ( ! mfrc522.PICC_ReadCardSerial()) { //если данные карты не читаются, то перезапустить цикл "void loop"
    blocked();
    return;
  }
  for (byte i = 0; i < 4; i++) { //Сверяем два массива, если какой то байт не совпал, выходим из цикла. Если все верно, то выполняем действия после цикла.
    if (uidCard[i] != mfrc522.uid.uidByte[i]) {
      blocked();
      return;
    }
  }
  digitalWrite(blockedLed, 0); //выключаем красный светодиод
  digitalWrite(successLed, 1); //включаем синий светодиод
  delay(2000); //задержка 5000 миллисекунд
  digitalWrite(blockedLed, 0); //выключаем красный светодиод
  digitalWrite(successLed, 0); //включаем синий светодиод
}

void blocked() {
  digitalWrite(blockedLed, 1);
  delay(2000);
  digitalWrite(blockedLed, 0);
}