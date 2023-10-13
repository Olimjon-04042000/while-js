// masalalar

// To'rtburchak


// let a = prompt("Birinchi sonni kiriting:");
// let b = prompt("Ikkinchi sonni kiriting:");
// let S;
// let P;
// S = a * b;
// P = (a + b) * 2;
// if (S > P) {
//     console.log("To'rtburchakning yuzasi " + S + " ga teng.");
// } else {
//     console.log("To'rtburchakning perimetri " + P + " ga teng.");
// }


// HTTPS


// let n = prompt("Ixtiyoriy sonni kiriting.Men kiritilgan son har tomonlama toq son ekanligini tekshirib beraman.");
// let count = 0;
// let a;
// let yes = 0;
// let no = 0;
// count = count * 1;
// n = n * 1;
// a = n;
// while (n >= 1) {
//     n = Math.trunc(n / 10);
//     count++;
// }
// n = a;
// while (n >= 1) {
//     if ((count % 2 == 1) && (n % 2 == 1)) {
//         yes++;
//     } else {
//         no++;
//     }
//     n = Math.trunc(n / 10);
// }
// if ((yes == 0) && (no != 0)) {
//     console.log("No");
// } else if ((no == 0) && (yes != 0)) {
//     console.log("Yes");
// } else {
//     console.log("Nol sonini qabul qilmaydi iltimos boshqa raqam kiriting.");
// }



//  Kechikkan poyezd










//  Sanash vaqti


// let n = prompt("Birinchi sonni kiriting: ");
// let m = prompt("Birinchi sondan katta bo'lgan ixtiyoriy son kiriting:");
// if (n < m) {
//     console.log((m - n + 1) * 10);
// } else {
//     console.log("Ikkinchi son birinchi sondan katta bo'lishi kerak.Qaytadan son kiriting. ");
// }


// Katt-kichik


// let a = prompt("Ixtiyoriy birinchi sonni kiriting:");
// let b = prompt("Ixtiyoriy ikkinchi sonni kiriting:");
// a = a * 1;
// b = b * 1;
// if (a < b) {
//     console.log("<<<<");
// } else
// if (a == b) {
//     console.log("====");
// } else if (a > b) {
//     console.log(">>>>");
// }


// Yangi yil sovg'asi


// let n = prompt("Sonni kiriting:");
// let a = prompt("Birinchi sonni kiriting:");
// let b = prompt("Ikkinchi sonni kiriting:");
// let c = prompt("Uchinchi sonni kiriting:");
// n = n * 1;
// a = a * 1;
// b = b * 1;
// c = c * 1;
// if (a + b + c >= n) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }



// Ikki xonali sonning birinchi raqami


// let n = prompt("Ikki xonali son kiriting:");
// n = n * 1;
// if ((n > 9) && (n < 100)) {
//     console.log((n - n % 10) / 10);
// } else {
//     console.log("Ikki xonali son kiriting.");
// }


// Oxirgi raqam   


// let n = prompt("Ixiyoriy son kiriting:");
// // n = n * 1;
// console.log(n % 10);


// Diagnollar soni


// let n = prompt("Ixtiyoriy sonni kiriting:");
// if (n == 3) {
//     console.log("Uchburchakning diagnoli yo'q");
// } else if (n == 4) {
//     console.log("To'rtburchakning diagnollari soni 2 ta");
// } else if (n < 3) {
//     console.log("Ko'pburchak bo'lishi uchun 4 dan katta son kiriting.");
// } else {
//     console.log(n + " tomonli ko'pburchakning diagnollari soni " + ((n * (n - 2)) / 2) + " ta.");
// }


// Azimjonning qo'ylari


// let n = prompt("Azimjonning qo'ylarining oyoqlari sonini kiriting.Men sizga ularning nechta qulog'i borligini aytib beraman.");
// console.log("Azimjonning qo'ylarining quloqlari soni " + n / 2 + " ta.");


// Isfandiyor algebra darsida


// let n = prompt("Ixtiyoriy son kiritingz:");
// n = n * 1;
// let f;
// f = n ** 5 + 8 * (n ** 4) - 5 * (n ** 3) + 3 * (n ** 2) + n - 12;
// console.log(f);



// 10 ming qadam



// let n = prompt("1 dan katta 10 000 dan kichik ixtiyoriy son kiriting:");
// if ((n >= 1) && (n <= 10000)) {
//     console.log((n * 100) / 10000 + " foiz.");
// } else {
//     console.log("Birdan katta o'n mingdan kichik son kiriting.");
// }


// Omadsiz chipta


// let n = prompt("Ixtiyoriy son kiriting: ");
// let a;
// let count = 0;
// n = n * 1;
// while (n >= 1) {
//     a = Math.trunc(n / 10);
//     if ((n % 10 == 3) && (a % 10 == 1)) {
//         count++;
//     }
//     n = Math.trunc(n / 10);
// }
// if (count > 0) {
//     console.log("Omadsiz chipta");
// } else {
//     console.log("Omadli chipta");
// }



//  Qiziqarli ketma-ketlik


// let n = +prompt("Ixtiyoriy sonni kiriting: ");
// let sum = 0;
// let count = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i ** 3;
// }
// for (let b = 1; b <= sum; b++) {
//     if (sum % b == 0) {
//         count++;
//     }
// }
// if (count % 2 == 0) {
//     console.log("Qiziq emas");
// } else {
//     console.log("Qiziqarli");
// }


// Harorat


// let c = +prompt("Selsiy shkalasi bo'yicha harorat kiriting:");
// let k = c + 273.15;
// let f = c * 1.8 + 32;
// console.log(k + " Kelvin");
// console.log(f + " Farangeyit");


// while1.


// let a = +prompt("a sonni kiriting:");
// let b = +prompt("b sonni kiriting:");
// if (a > b) {
//     while (a - b > 0) {
//         a = a - b;
//     }
//     console.log(a);
// } else {
//     console.log("a son b sondan katta bo'lishi kerak.");
// }


// while2.



// let a = +prompt("a sonni kiriting:");
// let b = +prompt("b sonni kiriting:");
// let count = 0;
// if (a > b) {
//     while (a - b >= 0) {
//         count++;
//         a -= b;
//     }
//     console.log(count);
// } else {
//     console.log("a son b sondan katta bo'lishi kerak.");
// }


// while3.


// let n = +prompt("n sonni kiriting:");
// let k = +prompt("k sonni kiriting:");
// let count = 0;
// if (n > k) {
//     while (n - k >= 0) {
//         n -= k;
//         count++;
//     }
//     console.log(count + " butun, " + n + " qoldik.");
// } else {
//     console.log("a son b sondan katta bo'lishi kerak.");
// }


// while4.


// let n = +prompt("n sonni kiriting: ");
// let a = 0;
// let count = 0;
// while (n >= 3 ** a) {
//     if (n == 3 ** a) {
//         console.log("3-ning darajasi.");
//         count++;
//     }
//     a++;
// }
// if (count == 0) {
//     console.log("3-ning darajasi emas.");
// }


// while5.


// let n = +prompt("Ikkining birorta darajasini kiriting: ");
// let count = 0;
// let k = 0;
// while (n >= 2 ** k) {
//     if (n == 2 ** k) {
//         console.log(k);
//         count++;
//     }
//     k++;
// }
// if (count == 0) {
//     console.log("Ikkining darajasi emas.");
// }



// while17.


// let n = +prompt("n sonini kiriting:");
// let m = +prompt("m sonini kiriting:");
// let count = 0;
// if (n > m) {
//     while (n - m >= 0) {
//         n -= m;
//         count++;
//     }
//     console.log(count + " butun, " + n + " qoldiq.");
// } else {
//     console.log("Birinchi son ikkinchi sondan katta bo'lishi kerak.");
// }


// while18.


// let n = +prompt("Ixtiyoriy son kiriting:");
// let count = 0;
// let sum = 0;
// let a = n;
// while (n >= 1) {
//     count++;
//     n = n / 10;
// }
// n = a;
// while (n >= 1) {
//     sum += (n % 10) * 10 ** (count - 1);
//     n = Math.trunc(n / 10);
//     count -= 1;
// }
// console.log(sum);


// while19.


// let n = +prompt("Ixtiyoriy son kiriting:");
// let count = 0;
// let sum = 0;
// while (n >= 1) {
//     count++;
//     sum += n % 10;
//     n = Math.trunc(n / 10);
// }
// console.log("Raqamlari yig'indisi " + sum + ", raqamlari soni " + count + " ga teng.");


// while20.


// let n = +prompt("Ixtiyoriy sonni kiriting:");
// let count = 0;
// while (n >= 1) {
//     if (n % 10 == 2) {
//         console.log("Berilgan son raqamlari orasida 2 raqami bor.");
//         count++;
//         break;
//     }
//     n = Math.trunc(n / 10);
// }
// if (count == 0) {
//     console.log("Berilgan son raqamlari orasida 2 raqami yo'q.");
// }


// while21.



// let n = +prompt("Ixtiyoriy son kiriting:");
// let count = 0;
// while (n >= 1) {
//     if (n % 2 == 1) {
//         console.log("Berilgan son raqamlari orasida toq sonlar bor.");
//         count++;
//         break;
//     }
//     n = Math.trunc(n / 10);
// }
// if (count == 0) {
//     console.log("Berilgan son raqamlari orasida toq sonlar yo'q.");
// }



// while22.


// let n = +prompt("Ixtiyoriy son kiriting men uni tub yoki tub emasligini tekshiraman.");
// let count = 0;
// let i = 1;
// while (n >= i) {
//     if (n % i == 0) {
//         count++;
//     }
//     i++;
// }
// if (count == 2) {
//     console.log("Tub son");
// } else if (count == 1) {
//     console.log("1 tub son ham murakkab son ham emas.");
// } else {
//     console.log("Tub son emas.");
// }



// case1


// let m = +prompt("1 dan 7 gacha bo'lgan raqam kiriting:");

// switch (m) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;

//     default:
//         console.log("Bunday hafta kuni yo'q.");
//         break;
// }



// case2



let m = +prompt("1 dan 5 gacha bo'lgan raqam kiriting:");

switch (m) {
    case 1:
        console.log("Yomon");
        break;
    case 2:
        console.log("Qoniqarsiz");
        break;
    case 3:
        console.log("Qoniqarli");
        break;
    case 4:
        console.log("Yaxshi");
        break;
    case 5:
        console.log("A'lo");
        break;
    default:
        console.log("Xato.");
        break;
}