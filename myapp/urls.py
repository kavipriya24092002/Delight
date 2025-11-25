from django.urls import path
from .import views

urlpatterns = [
    path('',views.index,name='index'),
    path('form/',views.feed,name='feed'),
    path('order_online/',views.order_online,name="order_online"),
]
