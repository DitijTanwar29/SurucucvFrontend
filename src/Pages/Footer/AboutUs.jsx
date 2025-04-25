import React from 'react';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>

    <div className="max-w-4xl mx-auto px-6 py-12 font-rubik text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 mt-5">Hakkımızda</h2>
      <p className="text-lg leading-relaxed space-y-4">
        <strong>Biz kimiz;</strong><br /><br />
        Biz, 2007 yılında, ulaştırma sektörüne danışmanlık yapmak için yola çıktık. Bunu başarmak ve varlığımızı sürdürmek adına, kara ulaştırması sektöründe çıkan mevzuatı öğrendik ve takip ettik. Sektöre faydamız olabilmesi için bu mevzuatı özümsemek gerekiyordu, özümsedik.
        <br /><br />
        Sektördeki tüm taraflara danışmanlık yaparak, iş takibi yaparak, eğitim vererek ve onlara, sektörel bütün ihtiyaçları için hizmet vererek, yolumuza devam ettik. Bu bağlamda, Türkiye’nin değeri olan, büyük lojistik işletmelerine, dev üretim tesislerine danışmanlık yaptık, yapıyoruz.
        <br /><br />
        Sürücülerimize, belgelendirme konusunda hizmetlerimizi halen devam ettirmekteyiz. Bunun yanında, 2014’ten bu yana da eğitim hizmetleri sağlayarak yolumuza devam ediyoruz.
        <br /><br />
        Sektör içinde kazandığımızı yine sektöre geri kazandırmak gibi bir hedefimiz var. Bunu yapabilmek için zaman ayırıyoruz. Enerji ve kaynak ayırıyoruz. Sektörün eksiklerini tamamlamak için projeler üretiyoruz. Bunları hayata geçirmek için araştırmalar ve yatırımlar yapıyoruz. <strong>SURUCUCV</strong>’de bunlardan biri.
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
