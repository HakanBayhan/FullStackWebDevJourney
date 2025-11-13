**1.COURSE ORİENTATİON**
Kursta neler yapılacağını ,kursun nasıl dinlenmesi gerektiğini ve kursta nelere ihtiyaç duyacağımızı gibi konuları anlattı.

**2.An Intruduction to Web Development**

İnternetin ne olduğundan ve nasıl çalıştığından bahsedildi.VS Code ve diğer gerekliliklerin nasıl indirildiğini gösterdi.Web sitelerinin nasıl çalıştığını anlattı kısaca özetlemek gerekirse de bu konuları ip ⇒ (internet protocol) internette bütün cihazlar bağlı ve bu protokolü kullanıyor biz de web sitelerine bağlanmak için bu protokolü kullanarak bir web serverine http request gönderiyoruz.Karşılık olarak da talep ettiğimiz bilgiler veriliyor.Yetkilendirme bilgilerin nereye gideceği nasıl olacağı tarzı şeyler de backend tarafında belirleniyor.HTML-CSS-JS ‘in kısaca ne olduğundan bahsetti ve ‘MOR DİNAZOR DANS EDİYOR’ olarak kodladı dinazorun HTML ‘i temsil ettiğini ‘MOR’ “un CSS’i ve ‘DANS EDİYOR’un ise JS’i temsil ettiğini anlattı.HTML bir temel gibi css tasarımlarının yapıldığı vs js de aksiyonların oluşturulduğu kısım gibi düşünebiliriz kısaca.

**3.HTML the Essentials**
HTML’in eskiden akadamik yazılar yazmak için kullanıldığından bahsetti daha sonrasında ise html kullanarak nasıl kod yazıldığını anlatmaya başladı.
Html elementlerini anlattı.
`<html>` for structure——`<body>`structure ——`<img>`for images(alt değişkeni img elementinde resim gelmezse yerini bir yazı alsın diye var)——`<a>` for links———`<h1><h2><h3><h4>——<p>`

gibi elementler ve alt başlıkları öğretildi eğitimin bu kısmında.

**4.HTML.Next Steps & Sementics**

HTML5’in ne olduğundan bahsetti çoğu kişinin yanlış bildiğini aslında sadece html’in nasıl çalışması gerektiğinin açıklandığını söyledi HTML5’de ve HTML’ dosyasında oluşturduğumuz mimariyi browserin çalıştırdığını söyledi.

`<!DOCTYPE html>`’elementinin de zaten güncel HTML versiyonunu kullanarak oluşturulmuş bir dosya olduğunu browsera belirtmek için koda eklendiğini söyledi.

`<hr>` = bir sıra boyunca çizgi çekmeye yarıyor

`<br>` = break kelimesinden geliyor ve satırı kesmene yarıyor.

`<div>` = satırları contain etmek için.
`<span>` = satır contain etmek için.

for comments in the code we use <!—”comment”—>

inline elementler yani aynı çizgi içerisinde çalışan ve kendi bloğunda çalışan elementler var bunlar css kullanarak değiştirilebiliyor ancak elementlerin kendi karakterleri normalde bunlara ayrılıyor.
`<sup></sup>` = bu üst eklemek için kullanılıyor örnek olarak da <p>2<sup>2</sup></p> yazdığımızda 2 üzeri 2 oluyor.Yine içerisinde link atayarak üstün link olmasını da sağlayabiliyoruz.

`<sub></sub>` = ise altına yazı eklemek için kullanılıyor. `<p>2<sub>2</sub></p>` 2 altında 2 oluyor.

Kod yazarken bazı işaret ve yazıları kodda kullanmak istediğimizde kodun görünüşünde bozulmalar ve başka hatalarla karşılaşabiliyoruz.EntityCode kullanarak bunun önüne geçebiliyoruz. örneğin `<p> a > b den </p>` yazmak istediğimizde sorun yaşayabiliyoruz çünkü “>” işareti kullanıyoruz ve editör veya compiler bunu farklı algılayabiliyor bundan dolayı da problem yaşayabiliyoruz bunun için de
`<p> a &lt; b  </p>` şeklinde yazdığımızde EntityCode kullanıyoruz ve sorun çözülüyor.

Sayfa tasarımlarından bahsettik Sementic Markup adı altında anlattı 2 sayfa üzerinden örneklendirdik birinde sayfa tasarımı için tamamen `<div>` ‘ler kullanılırken diğerinde `<main>` , `<header>` , `<footer>` gibi elementler kullanarak hem screen readerların sayfayı okumasını hem kodun daha anlaşılır olmasını ve geliştirmeye ve okumaya olanak sağladığından bahsettik.

Element oluşturmanın short cutlarından bahsettik.shortcutların olduğu site de burası öğrenmek işe yarayabilir.https://docs.emmet.io/cheat-sheet/

**Section 5:HTML:Forms & Tables**

Table’lardan bahsettik.Formlardan bahsettik mantıklarını kavradık öncelikle.

**Temel Table Elementleri:**

`<table>` elementi tablo oluşturmak için .
`<tr>` table raw oluşturmak için kısaca horizontal bir hücre oluşturuyor.

`<td>` table data olarak geçiyor tablo hücreleri oluşturmak,bilgi girmek için kullanılıyor.

`<th>` tablo başlıkları eklemek amacıyla oluşturuluyor.

Örnek yapı da şu şekilde:
`<table>`

`<tr><th>markalar</th><th>Kalite</th></tr>`

`<tr><td>MSI</td><td>Yüksek</td></tr>`

`</table>`

**Diğer Table Elementleri:**

`<thead>` table’ın başlık kısımları için,

`<tbody>` table’ın gövde kısmı için,

`<tfooter>` table’ın taban kısmı için,

bunları kullanıyor olmamız kodun anlaşılabilirlik ,erişebilirlik ve okunabilirliğini arttırmaktır.

**Form Element**

`<form>` elementi içerisinde formumuzu oluşturuyoruz.Form elementi içerisinde `<form action=””>`

olması “action” ile forma girilen datanın nereye gönderileceğinin belirlenmesini sağlar.`<form action=”” method=””>` methed olarak da 2 tür methodu oluyor formun biri get biri de post.

`<input>` elementini kullanarak formumuza girdi alanları oluşturuyoruz.Pek çok `<input>` tipi var bunları belirtebilmek ve seçmek için `<input type=””>` ‘ı kullanıyoruz.
Bir diğer `<input>` özelliği de `<input placeholder=””>` “placeholder” içerisine yazdığımız yazılar girdi alanlarında belirerek kullanıcıya input alanına neyin girilmesi gerektiğini açıklar.Bu işleme benzer bir işlem için `<label>` elementini de kullanıyoruz `<form>` ‘ları kullanırken.

`<input id=””>` inputlara koyduğumuz id’ ler veya başka elementlerde de kullandığımız id’ler o elemente özeldir ve başka bir elementte kullanılmamalıdır.Inputun id’si ile `<label for=”idname”>` matchleşmelidir.Yani inputta kullandığımız id tagına verdiğimiz değeri labelda for değeri olarak kullanmalıyız.

**Buttons**

butonlarda `<button>` olarak kullanıyoruz elementimizi ve button default olarak submit butonu olarak geliyor ve submit ettiğimiz form eğer butona bir aksiyon atanmadıysa formun action’ına göre aksiyon alıyor.

`<input name=”bu input alanı neyse onun adı”>` name tagının kullanılmasının amacı servera gönderilen bilginin frontend tarafında neye karşılık geldiğinin name aracılığıyla mantığa oturtturulmasına yardımcı olmasıdır.

input type ‘da radio button’a baktık ve eğer radio button’da hangi radio buttonın checked olduğunu anlamlandırabilmesi için serverın bir value ekliyoruz ve input şu hale geliyor:

`<input type=”radio” name=”xxl” value=”xxlrdbtn”>`
value girmek name atamak kadar önemli aksi taktirde server hangi radiobutton’ın checked olduğunu anlamlandıramaz.

**CSS**

Öncelikle netleştirdiği bir şeye değineceğim CSS çok geniş bir alan o yüzden de bütün CSS özelliklerini bilmek imkansız gibi bir şey bundan dolayı da kullanmak istediğimiz özellikleri her zaman bilmek değil araştırmak zorundayız.Dediğim gibi bütün özellikleri bilmek önemli değil önemli olan doğru kullanımlarını bilmek.

CSS kodlarımızın HTML’kodlarının üzerinde çalışması lazım ki zaten amacımız da iskeletimizi boyamak tasarımını yapamk CSS ile peki bunu nasıl yapabiliriz.3 farklı yaklaşım var bunun için biri örneğin
`<input style=”border-color = blue”>` tarzında bir kodla HTML elementinin içerisine yazmak.Bir diğer yaklaşım ise :

`<style>`

`h2{`

`border-color:blue;`

`}`

`</style>`

gibi bir kod yazarak HTML dökümanımızın içerisine yerleştirmek.Son yaklaşım ise CSS dökümanı oluşturup CSS dökümanını HTML dökümanına HTML dökümanında kullanacağımız `<link>` elementi ile yapıyoruz.bizim durumumuzda index.html dökümanımıza app.css dosyamızı bağlamak için
`<link rel=”stylesheet” href=”app.css”>` kapatma tagi kullanmıyoruz.

**CSS Properties**

color: yazı rengini belirlemek için kullanıyoruz.

background-color:arka plan rengini belirlemek için kullanıyoruz.

Aşağıdaki özellikleri ve ne işe yaradıklarını gösterdi:

```css
h1 {
  text-align: center;
  color: rgb(255, 0, 0);<!--farklı bir renk atama yöntemi burada
  yazılı olmayan renk seçme yöntemi ise doğrudan rengi yazmaktır->
  font-weight: 700;
  text-decoration: underline #ff00ff dashed;<!--yazıya dekorasyon eklemek için genellikle
  linklerin altındaki çizgiyi kaldırmak için kullanılıyor-->
  font-family: monospace;
}
h2 {
  color: #ff00ff;<!--yazı rengi belirlemek için-->
  line-height: 2;<!--satırlar arası boşluğu belirlemek için-->
  letter-spacing: 10px;<!--harfler arası boşluğu belirlemek için-->
  font-size: large;<!--yazı boyutu-->
  font-family: monospace;<!--yazı tiplerinin ailesini seçiyoruz bu sayede hepsi
  dahil oluyor-->
}
```

**Id selector:**

```
#button1 {
  background-color: green;
  color: white;
}
```

Id selector belirli bir elemente verdiğimiz id’yi kullanarak o elemente style eklememizi sağlıyor.

**Class Selector:**

```css
.d4 {
  font-size: 25px;
  color: #ff8fb7;
}
```

classımızı da bu şekilde seçiyoruz.

**Child Element:**

```css
li a {
  color: blue;
}
```

bir elementin alt elementi üzerinden işlem yapmak istiyorsak boşluk bırakıp devame ediyoruz.

**Multiple Element:**

```css
li,
a {
  color: blue;
}
```

Birden fazla element üzerinde işlem yapmak için kullanıyoruz.

**First Related:**

eğer bir elementin altının altındaki veya onun da bir altındaki element değil de sadece altındaki elementi kullanmak istiyorsak bunu kullanacağız.Şu şekilde kullanılıyor

`h1 > a{`

`color:blue;`

`}`

bu kodla h1 elementinin altındaki a elementinin rengini mavi yapmış oluyoruz.

**For The After:**

bu kod tipi yazdığımız bir elementten hemen sonra gelen elemente işlem yapmamızı sağlıyor.

Varsayalım ki h1 elementinden hemen sonra h1 elementine bağımsız bir a elementi var ve o oradaysa ona bir işlem uygulmak istiyoruz.

`h1 + a{`

`color:blue;`

`}`

bu kod sayesinde h1 altındaki a elementimize mavi rengini atamış oluyoruz.

**Belirlediğimiz Bir Durumu Karşılayan:**

örneğin input elementlerinden type’ı password olan bütün input elementlerinin yazısının sarı olmasını istiyoruz diyelim.

`input[type=”password”]{`

`color:blue;`

`}`

### Pseudo Classes

**Hover:**

Mouse üzerine geldiğinde contentin farklı bir tepki vermesini sağlıyoruz bu elementi kullanarak.

mesela şöyle bir html elementimiz var diyelim:

`<button class”element”>HTML Elementi</button>`

ona şöyle bir css koduyla hover ekleyebiliyoruz bu da mouse button elementinin üzerine getirildiğinde mavi olmasını sağlayacak.

`.element button:hover{`

`color:blue`

`}`

**Active:**

Bu stil bir elemetin üzerine basıldığında ancak henüz mouse bırakılmadığında belirlediğimiz olayları gerçekleştirmesini sağlıyor.

örnek olarak :

`nav a:active{`

`color:red`

`}`

Tamamına tek tek değinemeyebiliriz kursta diye buraya bir link bırakıyorum bu Pseudo Classlarının tamamının kodlarla açıklanmış hali bu sayfada mevcut.

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes

### Pseudo Elements

pseudo elementlerini de yine fazla kullanmadık ama lazım olabilir lazım olursa linkten erişebilirim veya araştırmam yeter fazla pseudo elementi yok zaten.
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements

**The CSS Cascade:**

Atamaların sırasının öneminden bahsettik bir elementin color’değerine mavi verip daha sonrasında aynı elementin color’ değerine kırmızı verdiğimizde element artık kırmızı olur.

İlk işlem gerçekleşmiyor demek değil sadece üstüne yazma işlemi gerçekleşiyor.

**Specifitcity:**

sıralama öneminden bahsediyor örneğin önce

`p a{`

`color:blue;`

`}`

yapar ve daha sonrasında:

`a{`

`color:red;`

`}`

yaparsak ilk yaptığımız işlemin hiçbir önemi kalmaz çünkü bütün a elementlerinin kırmızı ama specific bir elementin mavi olmasını istesek bile diğer gruba da dahil olduğu ve öncelik sırasını yanlış belirlediğimiz için yaptığımız işlemin üzerine yazılmış olucak.

Öncelik sırası denen bir şey var örneğin aynı elemente üç farklı stil atadığımızı varsayalım bu üçü id>class>element şeklinde ilerleyecektir çünkü id classtan daha spesifik bir betimlemeyle adresi gösterir class daha geniş bir adresi işaret eder son olarak element ise daha geniş bir alanı işaret eder bundan dolayı da işlem olarak id gerçekleşir.

**Inline Elements**

inline style’lardan vs bahsetti ve kullanılmasının mantıklı olmadığından css dökümanı içerisinde bütün style kodlaırnın bulunmasının mantıklı ve doğru olduğunu söyledi.
Important diye bir değişeknden bahsetti ama kullanmanın mantıklı olmadığını söyledi.Örnek olarak:

`a{`

`color:red !important;`

`}`

yine dediğim gibi kullanabilirim bunu ancak mantıklı ve çok işe yarayan ya da kullanılan bir şey değil.
