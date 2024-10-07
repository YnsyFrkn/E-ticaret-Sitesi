Bu proje, React eğitimi kapsamında bütün eğitim boyunca projede öğrendiklerimizi tek bir örnekle temel bilgileri ve araçları kullanarak Enes Bayram hocamızın desteğiyle yaptığımız bir e-ticaret sitesidir. 
Site, fakestoreapi'den çekilen ürünleri barındırmakta olup, kullanıcı kayıt ve giriş sistemi, ürün filtreleme, arama, sepete ürün ekleme/çıkarma, bakiye yönetimi ve detay sayfası gibi 
temel e-ticaret işlevlerini içerir.

Projenin Özellikleri:
Üyelik Sistemi: /register sayfasında kullanıcı kaydı yapılır, bilgiler JSON Server ile oluşturduğum veritabanına (db.json) kaydedilir. Üyelik işlemi sonrası /login sayfasına yönlendirilir ve giriş başarılı olursa anasayfaya (/) yönlendirilir.
Yüklenme Animasyonu (Spinner): Kullanıcı giriş/çıkış işlemlerinde, anasayfa açılırken ve ürün detay sayfasına girerken sayfa yüklenene kadar bir spinner animasyonu gösterilir.
Ürün Listeleme ve Filtreleme: Anasayfada electronics, jewelery, men's clothing, ve women's clothing kategorilerinde filtreleme seçenekleri sunulur. Filtreleme kısmında, kategori seçimleri için checkbox kullanılmıştır. Kullanıcılar navbar kısmındaki arama çubuğuyla ürün araması yapabilir.
Ürün Kartı ve Detay Sayfası: Anasayfadaki her ürün kartında, ürün resmi, başlığı, açıklaması, fiyatı ve detay butonu yer alır. Ürün detay sayfasında kullanıcılar, ürünleri inceleyip istedikleri miktarda sepete ekleyebilir.
Sepet İşlevselliği: Ürün detay sayfasında sepete ekleme ve ürün miktarını artırma/azaltma işlemleri yapılabilir. Sepette ayrıca, sepete eklenmiş ürünleri kaldırmak için bir "çıkar" butonu bulunur. Sepet simgesinin üzerinde toplam ürün sayısını göstermek için MUI Badge bileşeni kullanılmıştır. Sepete girildiğinde her ürünün miktarı, fiyatı ve sepetin toplam tutarı yazılıdır. 
Bakiye Yönetimi: Kullanıcıların başlangıç bakiyesi (örneğin, 1000 TL) bulunur. Sepet işlemleri sırasında "Satın Al" butonuna tıklanınca, bakiye yeterliyse toplam fiyat bakiyeden düşer ve "Ürünler satın alınmıştır" bildirimi gösterilir. Eğer bakiye yetersizse, "Bakiyeniz yeterli değildir" uyarısı verilir.
Bildirimler: Ürün sepete eklendiğinde veya giriş işlemi başarılı/başarısız olduğunda kullanıcıya bildirim gösterilir.
Çıkış Yap: Kullanıcı, anasayfadan çıkış yaparak oturumunu kapatabilir.

Kullanılan Araçlar:
MUI: UI bileşenlerini ve tasarım düzenini sağlamak için kullanılmıştır.
TypeScript: Kod güvenliği ve daha verimli bir geliştirme süreci için.
Redux Toolkit: Durum yönetimi için, karmaşık durum yönetimlerini daha erişilebilir ve yönetilebilir hale getirmek için kullanılmıştır.
JSON Server: Kayıt ve oturum açma için geçici veritabanı olarak.
Axios: API istekleri için.
Formik & Yup: Form verilerinin yönetimi ve doğrulama işlemleri için.
React Router DOM: Sayfalar arası geçiş ve yönlendirme için.
React Toastify: Kullanıcıya anlık bildirim sağlamak amacıyla.

![search](https://github.com/user-attachments/assets/413faf34-0632-4a82-b5c3-b3d52cd9d17c)
![Register](https://github.com/user-attachments/assets/61a55aa6-915f-4087-b5ff-d8e432ce7308)
![productDetail](https://github.com/user-attachments/assets/bf082fb7-28b4-4b23-adcd-a589c6886bd0)
![loginşifregiriniz](https://github.com/user-attachments/assets/67967aec-ce42-422c-bd3b-1c98a20afd68)
![loginkullanıcıadışifreHatası](https://github.com/user-attachments/assets/62831b88-525b-4a1f-8092-217d65d5ce30)
![loginKullanıcıAdıHatası](https://github.com/user-attachments/assets/c77b04a3-fd8e-47e8-99d2-06e4ab1dc9e0)
![Login](https://github.com/user-attachments/assets/244d756e-1b76-4643-9dd0-043514220251)
![home](https://github.com/user-attachments/assets/c3c02ea3-7551-46a9-8da1-7190c6fa3c42)
![filtreleme](https://github.com/user-attachments/assets/fef31f2c-0fa1-4c4f-8fa3-103fe78eee93)
![exitHome](https://github.com/user-attachments/assets/b3c857a5-2cc6-4e8c-8069-1e3944e1e82f)
![basketToproduct](https://github.com/user-attachments/assets/5d0deec3-241f-4d89-ac07-f5fe0eb38451)
![basketaddproduct](https://github.com/user-attachments/assets/aa96b78e-0fb0-4a49-aedd-cbcc112e5f24)
