from django.db import models


class Master(models.Model):
    masterName = models.CharField(max_length=64, verbose_name='Имя мастера')
    experience = models.CharField(max_length=64, verbose_name='Стаж работы')
    phone = models.CharField(max_length=64, verbose_name='Номер телефона')
    past = models.CharField(max_length=64, verbose_name='Место прошлой работы')

    class Meta:
        verbose_name_plural = 'Мастера'
        verbose_name = 'Мастер'
        ordering = ['masterName']


class Service(models.Model):
    title = models.CharField(max_length=50, verbose_name='Название')
    content = models.CharField(max_length=50, verbose_name='Описание')

    class Meta:
        verbose_name_plural = 'Услуги'
        verbose_name = 'Услуга'
        ordering = ['title']


class Masters_services(models.Model):
    master = models.ForeignKey(Master, on_delete=models.RESTRICT)
    service = models.ForeignKey(Service, on_delete=models.RESTRICT)
    price = models.FloatField(null=True, verbose_name='Цена')
    serviceTime = models.CharField(max_length=50, verbose_name='Продолжительность услуги')

    class Meta:
        verbose_name_plural = 'Мастера-услуги'
        verbose_name = 'Мастер-услуга'
        ordering = ['master']

# class Master(models.Model):
#     name = models.CharField(max_length=20,db_index=True,verbose_name='Имя')
#     experience = models.CharField(max_length=20,db_index=True,verbose_name='Имя')
#     class Meta:
#         verbose_name_plural = 'Имена мастеров'
#         verbose_name = 'Имя мастера'
#         ordering = ['namе']
#
# class Service(models.Model):
#     SERVICES = (
#         (None, 'Выберите название нужной услуги:'),
#         ('Manicure', 'Маникюр'),
#         ('Haircut', 'Стрижка'),
#         ('Makeup', 'Макияж'),)
#     master = models.ForeignKey(Master, on_delete=models.PROTECT)
#     title = models.CharField(max_length=50, db_index=True, choices=SERVICES)
#     price = models.FloatField(null=True, db_index=True, blank=True)
#     service = models.CharField(max_length=10, choices=SERVICES)
#     class Meta:
#         verbose_name_plural = 'Названия услуг'
#         verbose_name = 'Название услуги'
#         ordering = ['namе']


# class Master(models.Model):
#     name = models.CharField(max_length=20, db_index=True, verbose_name='Название')
#     class Meta:
#         verbose_name_plural = 'Рубрики'
#         verbose_name = 'Рубрика'
#         ordering = ['namе']
#
# class Service(models.Model):
#     SER = (
#         (None, 'Выберите разряд публикуемого объявления'),
#         ('b', 'Куплю'),
#         ('s', 'Продам'),
#         ('c', 'Обменяю'),)
#     rubric = models.ForeignKey(Rubric, on_delete=models.PROTECT)
#     title = models.CharField(max_length=50)
#     content = models.TextField(null=True, blank=True)
#     price = models.FloatField(null=True, blank=True)
#     kind = models.CharField(max_length=10, choices=KINDS)
#     published = models.DateTimeField(auto_now_add=True, db_index=True)
#     class Meta:
#         verbose_name_plural = 'Услуги'
#         verbose_name = 'Услуга'
#         ordering = ['price']
