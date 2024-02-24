/***************************************************
* Отображение полученных данных на ЖК-дисплее
****************************************************/
void showDataLCD(void)
{
  sum_nominal = 0;
  for (byte i = 0; i < nominalCount; i++) {
    Serial.print("NOMINAL: ");Serial.print(nominalValues[i]);Serial.print(" ");Serial.println(nominalQuantity[i]);
    sum_nominal += nominalQuantity[i] * nominalValues[i];  // ну и сумму сразу посчитать, как произведение цены монеты на количество
  } 
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Wait money.");
  lcd.setCursor(0,1);
  lcd.print(sum_nominal);
  lcd.setCursor(13,1);
  lcd.print("RUB");
}
void showAddedNominal() {
  if (millis()-displayNominalTime > 1000) {
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print(L"Добавлена купюра");
    lcd.setCursor(0,1);
    lcd.print(nominalDisplay);
    displayNominalTime = millis();     
  }
}
void showAddedCoin() {
  if (millis()-displayNominalTime > 1000) {
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print(L"Добавлена монета");
    lcd.setCursor(0,1);
    lcd.print(nominalDisplay);
    displayNominalTime = millis();     
  }
}
/***************************************************
* Отображение полученных данных на Serial Monitor
****************************************************/
void printData(void)
{
  Serial.print("red= ");
  Serial.print(red);
  Serial.print("   green= ");
  Serial.print(grn);
  Serial.print("   blue= ");
  Serial.println(blu); 
}