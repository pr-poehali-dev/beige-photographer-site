import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('portfolio');

  const portfolioImages = [
    {
      src: 'https://cdn.poehali.dev/files/7a972a20-846b-4999-a3d0-5f4f624ea4f9.jpg',
      title: 'Розовые облака над мостом',
      description: 'Магический закат окрашивает небо в нежные тона'
    },
    {
      src: 'https://cdn.poehali.dev/files/f689ed8e-bc68-408c-ad6f-600403274b8f.jpg',
      title: 'Золотой час на берегу',
      description: 'Силуэт человека на фоне заката над морем'
    },
    {
      src: 'https://cdn.poehali.dev/files/5d3d2110-70e1-43f0-81ff-84df45a12205.jpg',
      title: 'Уединение среди камней',
      description: 'Философское размышление на каменистом берегу'
    },
    {
      src: 'https://cdn.poehali.dev/files/0b0ee1af-b477-4b28-8208-826f4b9f6f7c.jpg',
      title: 'Ночная луна',
      description: 'Загадочный лунный пейзаж в темном небе'
    },
    {
      src: 'https://cdn.poehali.dev/files/20035b1d-01fd-4cdc-85c9-23b58340627a.jpg',
      title: 'Портрет местного жителя',
      description: 'Выразительный взгляд рыжего кота'
    }
  ];

  const services = [
    { name: 'Пейзажная съемка', price: 'от 5000₽' },
    { name: 'Рассветы и закаты', price: 'от 7000₽' },
    { name: 'Горные маршруты', price: 'от 8000₽' },
    { name: 'Авторская экскурсия', price: 'от 10000₽' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-cormorant text-2xl font-semibold text-primary">
              Фотограф Лазаревской
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'about', label: 'Обо мне' },
                { id: 'prices', label: 'Цены' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-6 animate-fade-in">
              Природа Лазаревской
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Профессиональная пейзажная фотография. Запечатлеваю красоту черноморского побережья, 
              горных лесов и удивительных закатов Кавказа.
            </p>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="lg" 
              className="animate-scale-in"
            >
              Посмотреть работы
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-center mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-cormorant text-xl font-medium mb-2">{image.title}</h3>
                    <p className="text-muted-foreground text-sm">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-cream-100/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cormorant text-4xl font-light mb-8">Обо мне</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg leading-relaxed">
                  Меня зовут Александр, и уже более 8 лет я посвящаю себя пейзажной фотографии. 
                  Лазаревская стала моим домом и источником вдохновения.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Каждый рассвет в горах, каждый закат над морем — это уникальная история, 
                  которую я стремлюсь рассказать через объектив. Моя цель — показать красоту 
                  нашего региона во всем ее многообразии.
                </p>
                <div className="flex items-center space-x-4">
                  <Icon name="Camera" size={24} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Canon EOS R5 • Профессиональное оборудование
                  </span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/5d3d2110-70e1-43f0-81ff-84df45a12205.jpg"
                  alt="Фотограф за работой"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-center mb-12">Услуги и цены</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-medium text-lg">{service.name}</h3>
                      </div>
                      <div className="text-primary font-medium">
                        {service.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-cream-200/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Цены указаны за базовую съемку. Стоимость может варьироваться в зависимости от сложности маршрута и времени съемки.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-cream-100/50">
        <div className="container mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-center mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (918) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-muted-foreground">@lazphoto</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">photo@lazarevskaya.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <p className="font-medium">Локация</p>
                      <p className="text-muted-foreground">Лазаревское, Сочи</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="w-full">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Связаться со мной
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Фотограф Лазаревской. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;