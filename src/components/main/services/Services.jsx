import React from 'react';
import Model from '../../../assets/sewing-comp/model.jpg';
import Short from '../../../assets/projects/1.jpg';
import Dress from '../../../assets/projects/2.jpg';
import SecondDress from '../../../assets/projects/3.jpg';

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Наши услуги</h2>
      <p>
        Мы берем на себя все этапы производства коллекции, чтобы запуск вашего
        бренда был максимально комфортным и продуктивным
      </p>
      <div className="services-items">
        <div className="services-item">
          <h3>Экспериментальный цех</h3>
          <p>- Разработка лекал</p>
          <p>- 3D примерка</p>
          <p>- Оцифровка лекал</p>
          <p>- Раскладка деталей кроя</p>
          <p>- Технический эскиз</p>
          <p>- Техническое описание</p>
          <p>- Пошив образцов</p>
          <p>- Разработка конфекционной карты</p>
          <p>- Градация</p>
          <p>- Печать лекал</p>
        </div>
        <div className="services-item-img">
          <img src={Model} alt="модель одежды" />
        </div>
        <div className="services-item">
          <h3>Пошив партий</h3>
          <p>- Подготовка технической документации</p>
          <p>- Пошив партий от 10 до 300 единиц</p>
          <p>- Услуга разбраковки ткани</p>
          <p>- Услуга декатировки ткани</p>
          <p>- Услуга дублирования</p>
          <p>- Контроль качества</p>
          <p>- Промежуточное и финальное ВТО</p>
        </div>
        <div className="services-item-img">
          <img src={Short} alt="модель одежды юбка" />
        </div>
        <div className="services-item-img">
          <img src={Dress} alt="модель одежды юбка" />
        </div>
        <div className="services-item">
          <h3>Печать и вышивка</h3>
          <div>
            <h5>Виды печати:</h5>
            <p>- цифровая печать</p>
            <p>- шелкография</p>
            <p>- DTF</p>
            <p>- флекстран</p>
          </div>
          <div>
            <h5>Вышивка:</h5>
            <p>- объемная</p>
            <p>- стандартная</p>
            <p>- шевроны</p>
            <p>- с усложнениями</p>
          </div>
        </div>
        <div className="services-item-img">
          <img src={SecondDress} alt="модель одежды юбка" />
        </div>
        <div className="services-item center">
          <div className="packaging">
            <h3>Упаковка и маркировка</h3>
            <p>- Упаковка</p>
            <p>- Маркировка</p>
            <p>- Отгрузка/доставка</p>
          </div>
        </div>
      </div>
    </section>
  );
}
