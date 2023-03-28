#Translate commands
ng add @angular/localize
ng extract-i18n --output-path src/translate
ng s --configuration=fr
ng build --configuration production --localize

#firebase
firebase login
firebase init
firebase deploy
