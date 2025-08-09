import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Factory" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">БетонМуром</h1>
              <p className="text-sm text-gray-500">Бетонный завод</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
            <a href="#equipment" className="text-gray-700 hover:text-blue-600 transition-colors">Автотехника</a>
            <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Качественный бетон<br />
            <span className="text-blue-600">в Муроме и области</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Производим и доставляем бетон высокого качества с собственным парком спецтехники. 
            Работаем быстро и надежно для строительных объектов любого масштаба.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать бетон
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" className="text-green-600" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Надежный партнёр</h3>
                <p className="text-gray-600">Гарантия качества и сроков поставки</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-blue-600" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Быстрая логистика</h3>
                <p className="text-gray-600">Доставка в день заказа по региону</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Парк автотехники</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современная спецтехника для качественной доставки и подачи бетона на любые объекты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon name={item.icon} className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для заказа бетона и консультаций</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Телефоны</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <a href="tel:+79209165567" className="hover:text-blue-600 transition-colors">
                    8 (920) 916-55-67
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+79209362081" className="hover:text-blue-600 transition-colors">
                    8 (920) 936-20-81
                  </a>
                </p>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:prom33teh@mail.ru" className="hover:text-green-600 transition-colors">
                  prom33teh@mail.ru
                </a>
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Регион работы</h3>
              <p className="text-gray-600">Муром и соседние области</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Factory" className="text-white" size={16} />
              </div>
              <span className="text-lg font-semibold">БетонМуром</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 БетонМуром. Качественный бетон в Муроме и области
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;