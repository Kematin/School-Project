/* На основе компонентов RGB ==> Определить цвет */    

int num;
boolean selectState;
long pressedDelay = 0;
boolean nominalFlag;

void getColor() {
  num = getColorNum();
  if (num) {
    standby_timer = millis();  // сбросить таймер
    selectState = !digitalRead(selectButton);
    while (!selectState) {
      if (millis()-pressedDelay > 150) {
        nominalFlag = !digitalRead(nominalButton);
        nominalState = nominalState + nominalFlag;
        pressedDelay = millis();
      }
      if (nominalState == 1) {
        nominalDisplay = "50 RUB";
      } else if (nominalState == 2) {
        nominalDisplay = "100 RUB";      
      } else if (nominalState == 3) {
        nominalDisplay = "500 RUB";       
      } else if (nominalState == 4) {
        nominalDisplay = "1000 RUB";        
      } else if (nominalState == 5) {
        nominalDisplay = "5000 RUB";       
      } else {
        nominalState = 1;
      }
      showAddedNominal();
      selectState = !digitalRead(selectButton);    
    }
    nominalQuantity[nominalState-1]++;
    nominalState = 1;    
    standby_timer = millis();  // сбросить таймер
  }
}

void getCoin() {
  standby_timer = millis();  // сбросить таймер
  selectState = !digitalRead(selectButton);
  while (!selectState) {
    if (millis()-pressedDelay > 150) {
      nominalFlag = !digitalRead(nominalButton);
      nominalState = nominalState + nominalFlag;
      pressedDelay = millis();
    }
    if (nominalState == 1) {
      nominalDisplay = "0.5 RUB";
    } else if (nominalState == 2) {
      nominalDisplay = "1 RUB";      
    } else if (nominalState == 3) {
      nominalDisplay = "2 RUB";       
    } else if (nominalState == 4) {
      nominalDisplay = "5 RUB";        
    } else if (nominalState == 5) {
      nominalDisplay = "10 RUB";       
    } else {
      nominalState = 1;
    }
    showAddedCoin();
    selectState = !digitalRead(selectButton);    
  }
  coin_quantity[nominalState-1]++;
  for (byte i = 0; i < coin_amount; i++) {
    EEPROM.updateInt(20 + i * 2, coin_quantity[i]);
  }
  nominalState = 1;    
  standby_timer = millis();  // сбросить таймер
  Serial.println("ADD COIN");
}

int getColorNum() {
    readRGB();
    if (DEBUG) {
      printData();
    }
    if (red < 40 && red > 0 && grn < 40 && grn > 0 && blu > 0 && blu < 40) {
      return 0;
    } else {
      return 1;
    }
}

/* читать компоненты RGB */
void readRGB() 
{
  red = 0;
  grn = 0;
  blu = 0;
  int n = 10;
  for (int i = 0; i < n; ++i)
  {
    //read red component
    digitalWrite(s2, LOW);
    digitalWrite(s3, LOW);
    red = red + pulseIn(outPin, LOW);
  
   //read green component
    digitalWrite(s2, HIGH);
    digitalWrite(s3, HIGH);
    grn = grn + pulseIn(outPin, LOW);
    
   //let's read blue component
    digitalWrite(s2, LOW);
    digitalWrite(s3, HIGH);
    blu = blu + pulseIn(outPin, LOW);
  }
  red = red/n;
  grn = grn/n;
  blu = blu/n;
}