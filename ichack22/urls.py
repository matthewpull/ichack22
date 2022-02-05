"""ichack22 URL Configuration

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
from django.contrib import admin
from django.urls import path

from helpers.views import HelperViewSet
from questions.views import QuestionViewSet, ReplyViewSet, CallViewSet
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
]

router = routers.SimpleRouter()
router.register(r'helpers', HelperViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'replies', ReplyViewSet)
router.register(r'calls', CallViewSet)
urlpatterns += router.urls
