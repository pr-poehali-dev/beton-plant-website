import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const equipment = [
    {
      name: "Бетононасос",
      description: "Стрела 32 метра для точной подачи бетона",
      image: "https://cdn.poehali.dev/files/a9ba82a2-5236-4b82-aa4e-715cc21a3832.jpeg",
      icon: "Truck"
    },
    {
      name: "Самосвал",
      description: "Надежная доставка материалов",
      image: "https://cdn.poehali.dev/files/b84b6237-efe7-440d-93c9-094069a202c9.jpeg",
      icon: "Truck"
    },
    {
      name: "Автобетоносмеситель",
      description: "Свежий бетон прямо на объект",
      image: "https://cdn.poehali.dev/files/eeb34117-093b-4d8e-8e72-050cb95134a5.jpeg",
      icon: "RefreshCw"
    },
    {
      name: "Манипулятор",
      description: "С люлькой и рюмкой для подачи бетона",
      image: "https://cdn.poehali.dev/files/b8f7f3ae-7c15-4c9c-866a-5a47283bbca7.jpeg",
      icon: "Crane"
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
      description: "Доставка автобетоносмесителями по Мурому и области",
      icon: "Truck"
    },
    {
      title: "Подача бетона",
      description: "Подача бетононасосом на любую высоту до 32 метров",
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
      description: "Доставка в день заказа по Мурому и Владимирской области",
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
    console.log('Form submitted:', formData);
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
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Factory" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ООО ПромТехнологии</h1>
                <p className="text-sm text-gray-500">Бетонный завод</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <Icon name="Phone" size={18} />
                <span className="font-semibold text-blue-600">8 (920) 916-55-67</span>
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
              с бетононасосом 32 метра для доставки и подачи на любые объекты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <Icon name="Phone" className="mr-2" size={20} />
                8 (920) 916-55-67
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
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
                <div className="text-3xl font-bold text-blue-600 mb-2">32м</div>
                <div className="text-sm text-gray-600">стрела бетононасоса</div>
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
              Конкурентные цены на товарный бетон всех марок
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Бетон М200</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">от 3500₽</div>
                <p className="text-gray-600 text-sm mb-4">за м³ с доставкой</p>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>• Фундаменты</li>
                  <li>• Стяжки полов</li>
                  <li>• Дорожки</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Популярный</span>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Бетон М300</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">от 3800₽</div>
                <p className="text-gray-600 text-sm mb-4">за м³ с доставкой</p>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>• Перекрытия</li>
                  <li>• Колонны</li>
                  <li>• Балки</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Бетон М400</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">от 4200₽</div>
                <p className="text-gray-600 text-sm mb-4">за м³ с доставкой</p>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>• Монолитные конструкции</li>
                  <li>• Мосты</li>
                  <li>• Специальные объекты</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              * Цены указаны с учетом доставки в пределах г. Муром. Доставка в область рассчитывается отдельно.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Получить точный расчет
            </Button>
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
                Оставьте заявку и мы свяжемся с вами в течение 15 минут. 
                Рассчитаем точную стоимость и подберем оптимальное решение.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-200" size={20} />
                  <span className="text-lg">8 (920) 916-55-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-200" size={20} />
                  <span className="text-lg">8 (920) 936-20-81</span>
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
                Производство и поставка качественного бетона в Муроме и Владимирской области. 
                Работаем с 2010 года, собственный автопарк, гарантия качества.
              </p>
              <p className="text-gray-500 text-xs">
                © 2024 ООО ПромТехнологии. Все права защищены.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">8 (920) 916-55-67</p>
                <p className="text-gray-300">8 (920) 936-20-81</p>
                <p className="text-gray-300">prom33teh@mail.ru</p>
                <p className="text-gray-300">г. Муром, Владимирская область</p>
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
    </div>
  );
};

export default Index;