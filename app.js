// for loop -> davtalt
console.log("Hello");
// for(var i=ehleh_too; i<=tugsguh_too; i++/i--){
// end davtah code bichne
//}
for(var i=1;i<=10;i++){
	console.log(i+".hello");
}
// i=1 --> 1<=10 -> true -> 1.hello -> 2
// i=2 --> 2<=10 -> true -> 2.hello -> 3
// i=11 -> 11<=10 -> false X stop
for(var i=10; i>=1; i--){
	console.log(i);
}
// 1. 1-20 хүртэлх тэгш тоонуудыг гаргах давталт бичнэ үү
for(var i=1;i<=20;i++){
	if(i%2==0){
		console.log("tegsh:"+i);
	}else{
		console.log("sondgoi:"+i);
	}
}
// 2. 1-100 хүртлэх 3 болон 5-д зэрэг хуваагддаг тоонуудыг давталт ашиглан гаргаж ирнэ үү.
for(var i=1;i<=100;i++){
	if(i%3==0 && i%5==0){
		console.log("3 bolo 5d huvaagddag too:"+i);
	}
}
// 3. 1-10 хүртлэх тоонуудын нийлбэр болон үржвэрийг давталт ашиглан олно уу
var sum=0;
var vrjver=1;
for(var i=1; i<=10;i++){
	sum=sum+i;
	vrjver=vrjver*i;
}
console.log("1-10 hurtelh toonii niilber:"+sum);
console.log("1-10 hurtelh toonii vrjver:"+vrjver);
// 4. Нэг тоо сонгоод тэр тооны хүрд гарж ирэх код бичнэ үү Жишээ нь : 5 X 1 = 5
var hvrd=5;
for(var i=1;i<=10;i++){
	console.log(hvrd + "x" + i + "=" + hvrd*i );
}
var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);
var chance=3;
for(var i=1; i<=chance;i++){
	var myNumber = +prompt("1-10 hurtelh random toog taana uu");
	if(myNumber==randomNumber){
		alert("Ta hojloo."+ i +" dahi udaagaar hojloo");
		break;
	}else if(myNumber=="" || myNumber<0 || myNumber>10){
		alert("Buruu utga oruulsan bna");
	}else if(myNumber<randomNumber){
		alert("Baga bna");
	}else if(myNumber>randomNumber){
		alert("ikh bna");
	}else{
		alert("Buruu bna. Dahin oroldono uu")
	}
	if(i==chance){
		alert("Ta hojigdloo");
		break;
	}
}
// *
// **
// ***
// ****
// *****

// *****
// ****
// ***
// **
// *

// 1. Hooson utga, 1-ees baga 10-aas ih utga oruulbal buruu utga
// 2. hint ugdug bolgoh buyu taaj baigaa toonoos ih too oruulval ih bna, baga oruulval baga baina gej hint uguh
// 3. Heddeh udaagiin oroldlogoor yalj baigaag gargaj ireh
// 4. Hojigdloo gej gargaj ireh