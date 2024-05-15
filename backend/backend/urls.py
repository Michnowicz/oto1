
from django.contrib import admin
from django.urls import path
from app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api', index),
    path('api/create/country', create_country),
    path('api/create/president', create_president),
]
