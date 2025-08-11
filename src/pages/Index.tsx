import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [selectedEquipment, setSelectedEquipment] = useState<any>(null);

  useEffect(() => {
    document.title = "Муром бетон - ООО ПромТехнологии | Бетонный завод в Мурому";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Муром бетон - производство и доставка товарного бетона всех марок. Бетонный завод ООО ПромТехнологии в Мурому. Качественный бетон, быстрая доставка.');
    }
    
    const keywords = document.createElement('meta');
    keywords.name = 'keywords';
    keywords.content = 'муром бетон, бетон муром, бетонный завод муром, товарный бетон муром, доставка бетона муром, ооо промтехнологии, бетон владимирская область';
    document.head.appendChild(keywords);
  }, []);

  const equipment = [
    {
      name: "Бетононасос",
      description: "Точная подача бетона на высоту",
      image: "https://cdn.poehali.dev/files/a9ba82a2-5236-4b82-aa4e-715cc21a3832.jpeg",
      icon: "Truck",
      fullDescription: "Автобетононасос - специализированная строительная машина для транспортировки и подачи бетонной смеси по трубопроводу под давлением. Позволяет подавать бетон на высоту и в труднодоступные места.",
      applications: [
        "Заливка фундаментов многоэтажных зданий",
        "Бетонирование перекрытий на высоте",
        "Подача бетона в стесненных условиях",
        "Строительство мостов и эстакад",
        "Заливка монолитных конструкций"
      ],
      specs: [
        "Максимальная высота подачи: 32 метра",
        "Производительность: до 120 м³/час",
        "Дальность подачи: до 32 метров",
        "Диаметр трубопровода: 125 мм"
      ]
    },
    {
      name: "Самосвал",
      description: "Надежная доставка материалов",
      image: "https://cdn.poehali.dev/files/50224a31-fb22-4d5f-82e9-54aac8d437f0.jpeg",
      icon: "Truck",
      fullDescription: "Автосамосвал - надежный грузовой автомобиль для перевозки сыпучих строительных материалов. Обеспечивает быструю доставку и разгрузку на объекте.",
      applications: [
        "Доставка песка, щебня, гравия",
        "Транспортировка грунта и строительного мусора",
        "Перевозка сыпучих материалов",
        "Работы по благоустройству территории",
        "Дорожно-строительные работы"
      ],
      specs: [
        "Грузоподъемность: до 25 тонн",
        "Объем кузова: до 15 м³",
        "Время разгрузки: 30-60 секунд",
        "Угол опрокидывания: до 50°"
      ]
    },
    {
      name: "Автобетоносмеситель",
      description: "Свежий бетон прямо на объект",
      image: "https://cdn.poehali.dev/files/eeb34117-093b-4d8e-8e72-050cb95134a5.jpeg",
      icon: "RefreshCw",
      fullDescription: "Автобетоносмеситель (миксер) - специальный автомобиль для транспортировки готовой бетонной смеси с сохранением её качества и подвижности на объект.",
      applications: [
        "Доставка товарного бетона на объект",
        "Заливка фундаментов частных домов",
        "Бетонирование площадок и дорожек",
        "Строительство промышленных объектов",
        "Ремонтно-строительные работы"
      ],
      specs: [
        "Объем барабана: до 9 м³",
        "Скорость вращения: 2-12 об/мин",
        "Время доставки: до 90 минут",
        "Высота разгрузки: до 4 метров"
      ]
    },
    {
      name: "Манипулятор",
      description: "Универсальная строительная техника",
      image: "https://cdn.poehali.dev/files/b8f7f3ae-7c15-4c9c-866a-5a47283bbca7.jpeg",
      icon: "Crane",
      fullDescription: "Автокран-манипулятор - многофункциональная строительная техника, объединяющая возможности грузового автомобиля и крана. Незаменим для погрузочно-разгрузочных работ, монтажа конструкций и подачи материалов. Высокая маневренность и точность позволяют работать в ограниченном пространстве.",
      applications: [
        "Разгрузка строительных материалов",
        "Монтаж железобетонных изделий",
        "Подача бетона рюмкой",
        "Высотные работы с люлькой",
        "Установка оборудования",
        "Строительство малоэтажных зданий",
        "Благоустройство территории"
      ],
      specs: [
        "Грузоподъемность крана: до 12 тонн",
        "Вылет стрелы: до 25 метров",
        "Грузоподъемность борта: до 15 тонн",
        "Поворот стрелы: 360°"
      ]
    }
  ];

  const services = [
    {
      title: "Товарный бетон",
      description: "Производство и поставка бетона всех марок от М100 до М500",
      icon: "Factory"
    },
    {
      title: "Доставка бетона",
      description: "Доставка автобетоносмесителями по Округу Муром",
      icon: "Truck"
    },
    {
      title: "Подача бетона",
      description: "Подача бетононасосом на любую высоту",
      icon: "ArrowUp"
    },
    {
      title: "Раствор цементный",
      description: "Изготовление цементных растворов любых марок",
      icon: "Hammer"
    }
  ];

  const advantages = [
    {
      title: "Собственное производство",
      description: "Полный цикл производства бетона на современном оборудовании",
      icon: "Settings"
    },
    {
      title: "Контроль качества",
      description: "Постоянный контроль качества в собственной лаборатории",
      icon: "CheckCircle"
    },
    {
      title: "Быстрая доставка",
      description: "Доставка в день заказа по Округу Муром",
      icon: "Clock"
    },
    {
      title: "Надежная техника",
      description: "Современный автопарк для любых строительных объектов",
      icon: "Truck"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Подготавливаем данные для отправки на email
    const emailSubject = encodeURIComponent('Новая заявка с сайта - Бетон Муром');
    const emailBody = encodeURIComponent(
      `Новая заявка с сайта:

Имя: ${formData.name}
Телефон: ${formData.phone}
Сообщение: ${formData.message || 'Не указано'}

---
Время отправки: ${new Date().toLocaleString('ru-RU')}`
    );
    
    // Открываем email клиент пользователя
    window.location.href = `mailto:prom33teh@mail.ru?subject=${emailSubject}&body=${emailBody}`;
    
    // Очищаем форму после отправки
    setFormData({
      name: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/f587dc4f-4cd2-45be-a582-09b83aac4274.jpeg" 
                  alt="ООО ПромТехнологии - логотип"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ООО ПромТехнологии</h1>
                <p className="text-sm text-gray-500">Бетонный завод</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <Icon name="Phone" size={18} />
                <a href="tel:+79209279652" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">8 (920) 927-96-52</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Icon name="MapPin" size={18} />
                <span>г. Муром</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Качественный бетон
              <br />
              <span className="text-blue-600">в Муроме и области</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Производство и поставка товарного бетона всех марок. Собственный автопарк 
              спецтехники для доставки и подачи на любые объекты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4" asChild>
                <a href="tel:+79209279652">
                  <Icon name="Phone" className="mr-2" size={20} />
                  8 (920) 927-96-52
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Качество</div>
                <div className="text-sm text-gray-600">гарантируем</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Быстро</div>
                <div className="text-sm text-gray-600">доставляем</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">готовы к работе</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наш автопарк</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Современная спецтехника для доставки и подачи бетона на любые объекты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedEquipment(item)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon name={item.icon as any} className="text-blue-600" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  </div>
                  
                  {/* Цена аренды большими синими буквами */}
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-blue-600">
                      {item.name === 'Бетононасос' && 'Аренда от 8000₽'}
                      {item.name === 'Самосвал' && 'Аренда от 2000₽'}
                      {item.name === 'Автобетоносмеситель' && 'Аренда от 3000₽'}
                      {item.name === 'Манипулятор' && 'Аренда от 3000₽'}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="mt-3 flex items-center text-blue-600 text-sm">
                    <Icon name="Info" size={16} className="mr-1" />
                    <span>Подробнее</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по производству и поставке строительных материалов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Основные преимущества работы с ООО ПромТехнологии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Цены на бетон</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Качественный бетон всех марок по выгодной цене
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-2 border-blue-500">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Factory" className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Товарный бетон</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">от 4500₽</div>
                  <p className="text-lg text-gray-600 mb-6">за м³ всех марок от М100 до М500</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Для фундаментов</h4>
                    <p className="text-sm text-gray-600">М200, М250, М300</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Для стяжек</h4>
                    <p className="text-sm text-gray-600">М150, М200</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Для конструкций</h4>
                    <p className="text-sm text-gray-600">М300, М400, М500</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Примечание:</strong> Доставка рассчитывается отдельно в зависимости от расстояния
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужен бетон?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Оставьте заявку и мы свяжемся с вами в течение часа. 
                Рассчитаем точную стоимость и подберем оптимальное решение.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-200" size={20} />
                  <a href="tel:+79209279652" className="text-lg hover:text-blue-300 transition-colors cursor-pointer">8 (920) 927-96-52</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-200" size={20} />
                  <a href="tel:+79209279652" className="text-lg hover:text-blue-300 transition-colors cursor-pointer">8 (920) 927-96-52</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-blue-200" size={20} />
                  <span className="text-lg">prom33teh@mail.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-blue-200" size={20} />
                  <span className="text-lg">Работаем: пн-сб 8:00-20:00</span>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Быстрый заказ</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван Иванович"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Что нужно?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Марка бетона, объем, адрес доставки..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты и местоположение</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Найдите нас и свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Icon name="MapPin" className="mr-3 text-blue-600" size={24} />
                  Наш адрес
                </h3>
                <p className="text-gray-700 text-lg mb-4">территория ПМК 10 Муром</p>
                <p className="text-sm text-gray-600">Владимирская область, Россия</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Icon name="Phone" className="mr-3 text-blue-600" size={24} />
                  Телефоны
                </h3>
                <div className="space-y-3">
                  <a href="tel:+79209279652" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
                    8 (920) 927-96-52
                  </a>
                  <a href="tel:+79209279652" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
                    8 (920) 927-96-52
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Icon name="Mail" className="mr-3 text-blue-600" size={24} />
                  Email
                </h3>
                <a href="mailto:prom33teh@mail.ru" className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
                  prom33teh@mail.ru
                </a>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Truck" className="mr-3 text-blue-600" size={24} />
                  Зона доставки
                </h3>
                <p className="text-gray-700">
                  Осуществляем доставку бетона по <strong>Округу Муром</strong> и прилегающим районам.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <strong>Важно:</strong> Стоимость доставки обговаривается отдельно от стоимости бетона
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center">
                    <Icon name="MapPin" className="text-blue-600 mr-3" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Наше местоположение</h3>
                      <p className="text-gray-600 text-sm">территория ПМК 10, здание 3, строение 1</p>
                      <p className="text-gray-500 text-xs">г. Муром, Владимирская область</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=41.971987%2C55.593663&z=16&pt=41.971987%2C55.593663%2Cpm2rdm~ООО%20ПромТехнологии%0Aтерритория%20ПМК%2010%0Aздание%203%2C%20строение%201" 
                    width="100%" 
                    height="350"
                    style={{ border: 'none' }}
                    title="Карта местоположения ООО ПромТехнологии"
                    className="w-full"
                  />
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                    <div className="flex items-start">
                      <Icon name="Building2" className="text-blue-600 mr-2 mt-1" size={16} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">ООО ПромТехнологии</p>
                        <p className="text-xs text-gray-600">ПМК 10, здание 3, строение 1</p>
                        <p className="text-xs text-gray-500">Производство бетона и аренда техники</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-700">
                      <Icon name="Navigation" className="text-blue-600 mr-2" size={16} />
                      <span>Построить маршрут</span>
                    </div>
                    <a 
                      href="https://yandex.ru/maps/?ll=41.971987%2C55.593663&z=16&pt=41.971987%2C55.593663%2Cpm2rdm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Открыть в Яндекс Картах
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="Clock" className="mr-3 text-green-600" size={20} />
                  Режим работы
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700"><strong>Пн-Пт:</strong> 8:00 - 18:00</p>
                  <p className="text-gray-700"><strong>Сб:</strong> 9:00 - 15:00</p>
                  <p className="text-gray-700"><strong>Вс:</strong> По договоренности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Factory" className="text-white" size={16} />
                </div>
                <span className="text-lg font-semibold">ООО ПромТехнологии</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                Производство и поставка качественного бетона в Округе Муром. 
                Собственная техника, гарантия качества и надежности.
              </p>
              <p className="text-gray-500 text-xs">
                © 2024 ООО ПромТехнологии. Все права защищены.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">8 (920) 927-96-52</p>
                <p className="text-gray-300">8 (920) 927-96-52</p>
                <p className="text-gray-300">prom33teh@mail.ru</p>
                <p className="text-gray-300">территория ПМК 10 Муром</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">Товарный бетон</p>
                <p className="text-gray-300">Доставка бетона</p>
                <p className="text-gray-300">Подача бетононасосом</p>
                <p className="text-gray-300">Цементные растворы</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Equipment Modal */}
      {selectedEquipment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedEquipment.name}</h2>
                <button
                  onClick={() => setSelectedEquipment(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedEquipment.image}
                    alt={selectedEquipment.name}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Описание</h3>
                    <p className="text-gray-700">{selectedEquipment.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Технические характеристики</h3>
                    <ul className="space-y-2">
                      {selectedEquipment.specs.map((spec: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Check" className="text-green-600 mr-2 mt-1" size={16} />
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Применение</h3>
                    <ul className="space-y-2">
                      {selectedEquipment.applications.map((app: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Icon name="ArrowRight" className="text-blue-600 mr-2 mt-1" size={16} />
                          <span className="text-gray-700">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedEquipment.name === 'Манипулятор' && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Дополнительные опции</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Icon name="Users" className="text-blue-600 mr-2" size={20} />
                              <span className="font-medium text-gray-900">Люлька</span>
                            </div>
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              от 3000₽
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">Для высотных работ</p>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Icon name="Droplet" className="text-blue-600 mr-2" size={20} />
                              <span className="font-medium text-gray-900">Рюмка</span>
                            </div>
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              от 3000₽
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">Для подачи бетона</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t">
                    <a href="tel:+79209279652">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Icon name="Phone" className="mr-2" size={18} />
                        Заказать эту технику
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;