
from django.contrib import admin
from django.urls import path, re_path
from firstapp import views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='home'),
    path('notmain/', views.index2, name='servicess'),
    path('notmain2/', views.index3),
    path('notmain3/', views.index4),
    path('localstorage/', views.localstorage),
    # re_path(r'^(?P<paramedik>\D+)/', views.index),
    path('accounts/login/', LoginView.as_view(), name='login'),
    path('services/', views.masters_services, name='serv'),
]
