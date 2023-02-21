// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR.

// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// function type(a){
// switch(a){
//     case SET:
//         console.log(SET);
//         break;
//     case GET:
//         console.log(GET);
//         break;
//     case DELETE:
//         console.log(DELETE);
//         break;
// }
// }
// type(DELETE)

// 1.2  2ci merhelede functiondan kenarda array yaradin ve
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let arr = [];

// function type(a){
// switch(a){
//     case SET:
//         console.log(SET);
//         break;
//     case GET:
//         console.log(GET);
//         break;
//     case DELETE:
//         console.log(DELETE);
//         break;
// }
// if(a==SET){
//     let b = Math.floor(Math.random() * 10)
//     arr.push(b)
// }
// }
// type(DELETE)
// console.log(arr)

// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.

// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

///////////////////////////////////////////////////////////////////////////////////////////

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.
// for(let i=0; i<mL.length; i++){
//     switch(i){
//         case i:
//             console.log(`${mL[i]} - ${new Date(2023, (i+1), 0).getDate()} days`);

//     }
// }



// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// var today = new Date();

// var currentMonth = today.getMonth();

// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// switch(currentMonth) {
//   case 1: checkLeap(); break;
//   case 0:
//   case 2:
//   case 4:
//   case 6:
//   case 7:
//   case 9:
//   case 11: console.log(`${month[currentMonth]} 31 Days`);
//            break;
//   case 3:
//   case 5:
//   case 8:
//   case 10: console.log(`${month[currentMonth]} 30 Days`);
//           break;
// }

// function checkLeap() {
//   if((today.getYear())%4 === 0 )
//     console.log(`${month[currentMonth]} 29 Days`);
//   else
//     console.log(`${month[currentMonth]} 28 Days`);
// }

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// var today = new Date();
// switch(months){
//     case today.getMonth():

// }
// console.log(today)

// 5) 4 cu taski heftenin gunleri ile yoxlayin

// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun

// var today = new Date();
// console.log(today.getDay())
// switch(day){
//     case 1:
//         console.log
// }

///////////////////////////////////////////////////////////////////////////////////////////

// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.

// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5

// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// function sliceIntoChunks(mL, chunkSize) {
//     const res = [];
//     for (let i = 0; i < mL.length; i += chunkSize) {
//         const chunk = mL.slice(i, i + chunkSize);
//         res.push(chunk);
//     }
//     return res;
// }
// let slice = sliceIntoChunks(mL, 1)
// console.log(slice);
// let merged = new Map([slice])



//  Almali oldugunuz
// let mL = [
//     ['January'],
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'],
//     ['August'],
//     ['September'],
//     ['October'],
//     ['November'],
//     ['December']
// ];

///////////////////////////////////////////////////////////////////////////////////////////

// 1.2 // Verilen array
// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// for (let i = 0; i < 4; i++) {
//   arr1.push(mL[i]);
// }
// for (let i = 4; i < 8; i++) {
//   arr2.push(mL[i]);
// }
// for (let i = 8; i < 12; i++) {
//   arr3.push(mL[i]);
// }
// arr2.push(arr3);
// arr1.push(arr2);
// console.log(arr1)

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];

///////////////////////////////////////////////////////////////////////////////////////////

// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// let arr = [];
// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// let arr4 = [];
// let arr5 = [];
// let arr6 = [];

// for(let i = 0;i<2;i++){
//     arr1.push(mL[i])
// }
// for(let i = 2;i<4;i++){
//     arr2.push(mL[i])
// }
// arr1.push(arr2);

// for(let i = 4;i<6;i++){
//     arr3.push(mL[i])
// }
// for(let i = 6;i<8;i++){
//     arr4.push(mL[i])
// }
// arr3.push(arr4);

// arr5.push(mL[8])
// for(let i = 9;i<12;i++){
//     arr6.push(mL[i])
// }
// arr5.push(arr6)
// arr.push(arr1,arr3,arr5)

// console.log(arr)

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];

///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let arr = [];
// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// let arr4 = [];
// let arr5 = [];
// let arr6 = [];
// let arr7 = [];
// let arr8 = [];
// let arr9 = [];

// // ***********************January, February, March, April************
// for(let i = 0;i<2;i++){
//     arr1.push(mL[i])
// }
// arr2.push(mL[2])
// arr1.push(arr2)
// arr3.push(mL[3])
// arr2.push(arr3)

// //*************************may, June, July, August**************
// for(let i = 4;i<6;i++){
//     arr4.push(mL[i])
// }
// arr5.push(mL[6])
// arr4.push(arr5)
// arr6.push(mL[7])
// arr5.push(arr6)

// // ***********************September, October, November, December***********
// arr7.push(mL[8])
// for(let i = 9;i<11;i++){
//     arr8.push(mL[i])
// }
// arr7.push(arr8)
// arr9.push(mL[11])
// arr8.push(arr9)

// arr.push(arr1, arr4, arr7)
// console.log(arr)

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];

///////////////////////////////////////////////////////////////////////////////////////////

// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let arr = [];
// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// let arr4 = [];
// let arr5 = [];
// let arr6 = [];

// for(let i = 0;i<2;i++){
//     arr1.push(mL[i])
// }
// for(let i = 2;i<4;i++){
//     arr2.push(mL[i])
// }
// arr1.push(arr2);

// for(let i = 4;i<6;i++){
//     arr3.push(mL[i])
// }
// for(let i = 6;i<8;i++){
//     arr4.push(mL[i])
// }
// arr3.push(arr4);

// arr5.push(mL[8])
// for(let i = 9;i<12;i++){
//     arr6.push(mL[i])
// }
// arr5.push(arr6)
// arr.push(arr1,arr5,arr3)

// console.log(arr)



//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];

///////////////////////////////////////////////////////////////////////////////////////////

// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Narmin Abdulova'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var)
// sonra onlari umumi arraya elave etmelisiz

///////////////////////////////////////////////////////////////////////////////////////////

// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// let text = 'Ey babeK kebaB ye!'

//  var newText = '';
//     for (var i = text.length - 1; i >= 0; i--)
//     newText += text[i];
//     console.log(newText);
  
  // let newText = text.split("").reverse().join("");
// console.log(newText)

   


// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

// let toplam = 0;
// for(let i = 0; i<length; i++){
//     if(i % 5 == 0 && i % 7 == 0)
//     toplam += i
//     console.log(i)
// }
// console.log(toplam)

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//     key1: 0,
//     key2: 3,
//     key3:2,
//     key4:4,
//     key5:53,
//     key7:7,
//     key8:8,
//     key9:91,
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.

// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px saga hereket etsin ve 20 saniyeden sonra dayansin.

// window.onload=function(){
//     let x = 0;
//     setInterval(moveElement,2000);

//     function moveElement(){
//         x += 20;
//         let left = x + "px";
//         document.getElementById("box").style.left=left;
//     }
//     setTimeout(() => {
//   clearInterval(moveElement)
// }, 2000);
// }



// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

// let  d = document.getElementById('bigBox')
// var position = 0;
// var position2 = 0

// setInterval(function(){
//     position += 10;
//     position2 += 10
//     d.style.top = position + "px";
//     d.style.left = position2 + "px";
// }, 1000)



// 3) Bir div yaradin  onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.
// let centercup = document.getElementById('center')

// setInterval(() => {
//   if{
//     centercup.style.width == '400px';
//     centercup.style.height == '400px';
//   }
//   else{
//     centercup.style.width == '200px';
//     centercup.style.height == '200px';
//   }
// }, 1000);



// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin




// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin.
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin.
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin.

// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur.
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq



// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin.

// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun
