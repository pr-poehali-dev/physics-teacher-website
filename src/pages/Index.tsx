import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Material {
  id: number;
  title: string;
  category: string;
  description: string;
  fileType: string;
}

interface Game {
  id: number;
  title: string;
  description: string;
  ageGroup: string;
  topic: string;
  link: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const materials: Material[] = [
    {
      id: 1,
      title: 'Механика. Законы Ньютона',
      category: 'Механика',
      description: 'Подробный конспект с примерами и задачами',
      fileType: 'PDF'
    },
    {
      id: 2,
      title: 'Электричество и магнетизм',
      category: 'Электродинамика',
      description: 'Теория и лабораторные работы',
      fileType: 'PDF'
    },
    {
      id: 3,
      title: 'Термодинамика. Основы',
      category: 'Термодинамика',
      description: 'Законы термодинамики с примерами',
      fileType: 'PDF'
    },
    {
      id: 4,
      title: 'Оптика. Волновые свойства света',
      category: 'Оптика',
      description: 'Конспект лекций по геометрической оптике',
      fileType: 'PDF'
    },
    {
      id: 5,
      title: 'Квантовая физика',
      category: 'Квантовая физика',
      description: 'Введение в квантовую механику',
      fileType: 'PDF'
    },
    {
      id: 6,
      title: 'Задачник по механике',
      category: 'Механика',
      description: 'Сборник задач разного уровня сложности',
      fileType: 'PDF'
    }
  ];

  const games: Game[] = [
    {
      id: 1,
      title: 'Физический конструктор',
      description: 'Создавай механизмы и проверяй законы физики в действии',
      ageGroup: '10-14 лет',
      topic: 'Механика',
      link: '#'
    },
    {
      id: 2,
      title: 'Электрические цепи',
      description: 'Собирай схемы и изучай законы электричества',
      ageGroup: '12-16 лет',
      topic: 'Электродинамика',
      link: '#'
    },
    {
      id: 3,
      title: 'Оптическая лаборатория',
      description: 'Эксперименты со светом, линзами и призмами',
      ageGroup: '10-15 лет',
      topic: 'Оптика',
      link: '#'
    },
    {
      id: 4,
      title: 'Космический симулятор',
      description: 'Изучай гравитацию и движение планет',
      ageGroup: '11-17 лет',
      topic: 'Астрофизика',
      link: '#'
    },
    {
      id: 5,
      title: 'Квантовая загадка',
      description: 'Познакомься с основами квантовой физики через игру',
      ageGroup: '14-18 лет',
      topic: 'Квантовая физика',
      link: '#'
    },
    {
      id: 6,
      title: 'Лаборатория звука',
      description: 'Изучай звуковые волны и акустику',
      ageGroup: '9-13 лет',
      topic: 'Волны',
      link: '#'
    }
  ];

  const achievements = [
    {
      title: 'Всероссийская олимпиада',
      students: 'Иванов А., Петрова М.',
      result: 'Победители регионального этапа',
      year: '2024'
    },
    {
      title: 'Конкурс научных работ',
      students: 'Сидоров Д.',
      result: 'Диплом 1 степени',
      year: '2024'
    },
    {
      title: 'Городская олимпиада',
      students: '7 учеников',
      result: 'Призовые места',
      year: '2023'
    }
  ];

  const teacherAchievements = [
    {
      title: 'Учитель года',
      description: 'Победитель городского конкурса',
      year: '2023'
    },
    {
      title: 'Почетная грамота Минобрнауки',
      description: 'За вклад в развитие образования',
      year: '2022'
    },
    {
      title: 'Публикации',
      description: '12 статей в научно-методических журналах',
      year: '2020-2024'
    }
  ];

  const professionalCourses = [
    {
      title: 'Современные методы преподавания физики',
      organization: 'МПГУ',
      hours: 72,
      year: '2024'
    },
    {
      title: 'ФГОС: практика внедрения',
      organization: 'РАНХиГС',
      hours: 108,
      year: '2023'
    },
    {
      title: 'Цифровые технологии в образовании',
      organization: 'ВШЭ',
      hours: 36,
      year: '2023'
    },
    {
      title: 'Подготовка к олимпиадам по физике',
      organization: 'МГУ им. Ломоносова',
      hours: 48,
      year: '2022'
    }
  ];

  const courses = [
    {
      grade: '7-8 класс',
      topics: ['Механическое движение', 'Взаимодействие тел', 'Давление', 'Работа и мощность'],
      hours: '68 часов'
    },
    {
      grade: '9 класс',
      topics: ['Законы движения', 'Механические колебания', 'Электромагнитное поле', 'Атомная физика'],
      hours: '102 часа'
    },
    {
      grade: '10-11 класс',
      topics: ['Кинематика и динамика', 'Термодинамика', 'Электродинамика', 'Квантовая физика'],
      hours: '170 часов'
    }
  ];

  const filteredMaterials = materials.filter(material =>
    material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(materials.map(m => m.category)));

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'program', label: 'Программа', icon: 'BookOpen' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'materials', label: 'Материалы', icon: 'FileText' },
    { id: 'achievements', label: 'Достижения учеников', icon: 'Trophy' },
    { id: 'about', label: 'О преподавателе', icon: 'User' },
  ];

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Atom" className="text-primary" size={28} />
              <span className="font-bold text-xl">Физика</span>
            </div>
            <div className="hidden md:flex gap-1">
              {navItems.map(item => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
          <header className="relative h-[500px] bg-gradient-to-br from-primary to-secondary overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/6afb2d5f-1e98-4891-90c6-9ae40d03b564/files/5f844f60-9204-44f8-8453-320f913e0d66.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">Физика с увлечением</h1>
              <p className="text-xl mb-8 max-w-2xl animate-slide-up">
                Изучаем законы природы, развиваем критическое мышление, готовимся к олимпиадам и экзаменам
              </p>
              <div className="flex gap-4 animate-slide-up">
                <Button size="lg" variant="secondary" className="font-medium" onClick={() => setActiveSection('materials')}>
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Материалы
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => setActiveSection('about')}>
                  <Icon name="User" className="mr-2" size={20} />
                  О преподавателе
                </Button>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-16">
            <section className="mb-20">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('program')}>
                  <CardHeader>
                    <Icon name="GraduationCap" className="text-primary mb-2" size={40} />
                    <CardTitle>Программа обучения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Комплексные курсы для 7-11 классов</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('games')}>
                  <CardHeader>
                    <Icon name="Gamepad2" className="text-secondary mb-2" size={40} />
                    <CardTitle>Интерактивные игры</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Изучай физику через игровые симуляторы</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('materials')}>
                  <CardHeader>
                    <Icon name="FileText" className="text-primary mb-2" size={40} />
                    <CardTitle>Библиотека материалов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Конспекты, задачники и пособия</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </main>
        </>
      )}

      {activeSection === 'program' && (
        <main className="container mx-auto px-4 py-16">
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Программа обучения</h2>
              <p className="text-muted-foreground text-lg">Комплексный подход к изучению физики</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="GraduationCap" className="text-primary" size={24} />
                      {course.grade}
                    </CardTitle>
                    <CardDescription>{course.hours}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      )}

      {activeSection === 'games' && (
        <main className="container mx-auto px-4 py-16">
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Интерактивные игры по физике</h2>
              <p className="text-muted-foreground text-lg">Изучай физику через увлекательные симуляторы и игры</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map(game => (
                <Card key={game.id} className="hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon name="Gamepad2" className="text-primary" size={32} />
                      <Badge variant="secondary">{game.ageGroup}</Badge>
                    </div>
                    <CardTitle className="text-xl">{game.title}</CardTitle>
                    <CardDescription>{game.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Icon name="Play" className="mr-2" size={16} />
                      Играть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      )}

      {activeSection === 'achievements' && (
        <main className="container mx-auto px-4 py-16">
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Достижения учеников</h2>
              <p className="text-muted-foreground text-lg">Гордимся успехами наших учеников</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon name="Trophy" className="text-secondary" size={32} />
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Участники:</strong> {achievement.students}
                    </p>
                    <p className="text-sm font-medium text-secondary">{achievement.result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      )}

      {activeSection === 'materials' && (
        <main className="container mx-auto px-4 py-16">
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Библиотека материалов</h2>
              <p className="text-muted-foreground text-lg">Конспекты, задачники и учебные пособия</p>
            </div>

            <div className="mb-8">
              <div className="relative max-w-xl mx-auto">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Поиск материалов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
                <TabsTrigger value="all">Все</TabsTrigger>
                {categories.slice(0, 3).map(category => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMaterials.map(material => (
                  <Card key={material.id} className="hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Icon name="FileText" className="text-primary" size={28} />
                        <Badge>{material.fileType}</Badge>
                      </div>
                      <CardTitle className="text-lg">{material.title}</CardTitle>
                      <CardDescription>{material.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {categories.slice(0, 3).map(category => (
                <TabsContent key={category} value={category} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMaterials
                    .filter(material => material.category === category)
                    .map(material => (
                      <Card key={material.id} className="hover:shadow-lg transition-shadow group">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Icon name="FileText" className="text-primary" size={28} />
                            <Badge>{material.fileType}</Badge>
                          </div>
                          <CardTitle className="text-lg">{material.title}</CardTitle>
                          <CardDescription>{material.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon name="Download" className="mr-2" size={16} />
                            Скачать
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </main>
      )}

      {activeSection === 'about' && (
        <main className="container mx-auto px-4 py-16">
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">О преподавателе</h2>
              <p className="text-muted-foreground text-lg">Образование, опыт и достижения</p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <Card className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" className="text-white" size={80} />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">Иванова Мария Петровна</h3>
                    <p className="text-xl text-muted-foreground mb-4">Учитель физики высшей категории</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Образование:</strong> МГУ им. Ломоносова, факультет физики</p>
                      <p><strong>Педагогический стаж:</strong> 15 лет</p>
                      <p><strong>Специализация:</strong> Подготовка к олимпиадам, углубленное изучение физики</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t">
                  <p className="text-muted-foreground leading-relaxed">
                    Преподаю физику с 2009 года. Моя цель — не просто передать знания, а научить детей думать, анализировать и применять физические законы на практике. 
                    За годы работы подготовила более 50 призеров олимпиад различного уровня. Регулярно повышаю квалификацию и внедряю современные методики обучения.
                  </p>
                </div>
              </Card>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Профессиональные достижения</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {teacherAchievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Icon name="Award" className="text-primary" size={32} />
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Курсы повышения квалификации</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {professionalCourses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Icon name="BookMarked" className="text-secondary" size={28} />
                        <Badge>{course.hours} ч.</Badge>
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.organization}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Год прохождения: {course.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      <footer className="bg-muted py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Учитель физики. Развиваем научное мышление</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
