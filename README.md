# FullStackDevJourney

Bu repoyu kullanmamın amacı FullStackDev olma yolunca yazdığım kodlar ve oluşturduğum projeleri kaydedebilmek ve paylaşabilmektir.

KURS BOYUNCA ALDIĞIM NOTLARIM:

# UdemyTheWebDevBootcampCourseNotes

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
