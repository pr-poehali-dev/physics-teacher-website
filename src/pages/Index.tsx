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

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <div className="min-h-screen">
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
            <Button size="lg" variant="secondary" className="font-medium">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Материалы
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section id="program" className="mb-20">
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

        <section id="achievements" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Достижения</h2>
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

        <section id="materials" className="mb-20">
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

        <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
          <Icon name="Lightbulb" className="mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">Есть вопросы?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Свяжитесь со мной для записи на занятия или консультации
          </p>
          <Button size="lg" variant="secondary">
            <Icon name="Mail" className="mr-2" size={20} />
            Написать сообщение
          </Button>
        </section>
      </main>

      <footer className="bg-muted py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Учитель физики. Развиваем научное мышление</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
