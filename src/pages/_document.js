import Document, {Html, Head, Main, NextScript} from "next/document";
import React from "react";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff"/>
          <title>Росскерамика</title>
          <meta
            name="description"
            content="О компании Сеть магазинов «Росскерамика» представлена на рынке отделочных материалов с июня 2006 года. Почему плитку стоит покупать именно в Росскерамике в ТЦ Аю Гранд Комфорт? Этот магазин открыт в начале 2016 года,каждому покупателю мы делаем бесплатно дизайн с цветной распечаткой, сам торговый центр имеет максимальные удобства для клиентов - удобные подъездные пути, просторный паркинг, кондиционируемое помещение где летом прохладно, а зимой тепло, под одной крышей работают более 200 строительных магазинов, в торговом комплексе есть кафе, детская площадка с воспитателем, который смотрит за Вашими детьми, пока Вы делаете покупки. Для Вашего удобства мы постарались собрать в одном месте все лучшие керамические коллекции от ведущих производителей России. Мы предлагаем керамические материалы для любых целей - для отделки внутренних и наружных поверхностей. Распахнутые двери магазина «Росскерамика» в ТЦ Аю Гранд Комфорт предлагают Вам все самое новое, модное и революционное для оформления интерьеров и экстерьеров. Мы работаем, для того, чтобы Вы могли ориентироваться в мире современного дизайна, оригинальных идей и стилистических решений. Откройте для себя мир керамической моды!Так же приглашаем к выгодному сотрудничеству дизайнеров, строителей и коммерческие организации"/>
          <meta
            name="description"
            content='Кафель в рассрочку Бишкек Распродажа кафеля в бишкеке Росскерамика Бишкек Сколько стоит кафель для ванной Каменный кафель Киргизский кафель Кафели для ванны кафель для ванны цена в бишкеке кафель цена за кв метр бишкек таатан бишкек кафель кафель цены бишкек кафель бишкек каталог кафель росскерамика бишкек каталог росскерамика бишкек инстаграм мир кафеля Склад росскерамика бишкек Росскерамика бишкек инстаграм Росскерамика Бишкек адреса Кафель росскерамика бишкек каталог Плитка кабанчик бишкек Таатан Бишкек кафель Кафель для стен цена бишкек Кафель цена за кв метр Бишкек кафель для ванны цена кафель в бишкеке цена' />
          <meta property="og:title" content="Росскерамика"/>
          <meta property="og:description"
                content="О компании Сеть магазинов «Росскерамика» представлена на рынке отделочных материалов с июня 2006 года. Почему плитку стоит покупать именно в Росскерамике в ТЦ Аю Гранд Комфорт? Этот магазин открыт в начале 2016 года,каждому покупателю мы делаем бесплатно дизайн с цветной распечаткой, сам торговый центр имеет максимальные удобства для клиентов - удобные подъездные пути, просторный паркинг, кондиционируемое помещение где летом прохладно, а зимой тепло, под одной крышей работают более 200 строительных магазинов, в торговом комплексе есть кафе, детская площадка с воспитателем, который смотрит за Вашими детьми, пока Вы делаете покупки. Для Вашего удобства мы постарались собрать в одном месте все лучшие керамические коллекции от ведущих производителей России. Мы предлагаем керамические материалы для любых целей - для отделки внутренних и наружных поверхностей. Распахнутые двери магазина «Росскерамика» в ТЦ Аю Гранд Комфорт предлагают Вам все самое новое, модное и революционное для оформления интерьеров и экстерьеров. Мы работаем, для того, чтобы Вы могли ориентироваться в мире современного дизайна, оригинальных идей и стилистических решений. Откройте для себя мир керамической моды!Так же приглашаем к выгодному сотрудничеству дизайнеров, строителей и коммерческие организации"/>
          <meta property="og:url" content="http://mirplitki.kg/"/>
          <meta property="og:type" content="website"/>
        </Head>
        <body>
        <div className="App" id="App">
          <Main/>
          <NextScript/>
        </div>
        </body>
      </Html>
    );
  }
}
