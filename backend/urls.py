"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from mall import views

router = routers.DefaultRouter()
router.register('Product', views.ProductView, 'Product')


class HomeTemplateView(TemplateView):
    template_name = 'index.html'


class TestTemplateView(TemplateView):
    template_name = 'test.html'


class PostlistTemplateView(TemplateView):
    template_name = 'postlist.html'


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', HomeTemplateView.as_view(), name='home'),
    path('test/', TestTemplateView.as_view(), name='test'),
    path('postlist/', PostlistTemplateView.as_view(), name='post'),
    path('post/', include('post.urls')),
]
