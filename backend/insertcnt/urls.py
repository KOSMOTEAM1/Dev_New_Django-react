#backend/post/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.Listinsertcnt.as_view()),
    path('<int:pk>/', views.Detailinsertcnt.as_view()),
    path('today/', views.Sortinsertcnt.as_view()),
]