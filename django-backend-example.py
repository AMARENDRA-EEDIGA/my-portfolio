# Django REST API Example for Portfolio Backend
# This is a minimal working example - create this in a separate Django project later

# models.py
from django.db import models

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('web', 'Web Development'),
        ('erp', 'ERP'),
        ('security', 'Security'),
        ('business', 'Business'),
        ('ecommerce', 'E-commerce'),
        ('management', 'Management'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.JSONField(default=list)  # Store as JSON array
    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    featured = models.BooleanField(default=False)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):\n        return self.title

# serializers.py
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

# views.py
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
    def get_queryset(self):
        queryset = Project.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(category=category)
        return queryset

@api_view(['GET'])
def featured_projects(request):
    projects = Project.objects.filter(featured=True)
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.ProjectListView.as_view(), name='project-list'),
    path('projects/featured/', views.featured_projects, name='featured-projects'),
]

# Sample data to populate database
SAMPLE_PROJECTS = [
    {
        "title": "Odoo ERP Customization",
        "description": "Comprehensive ERP solution with custom modules for inventory management, sales automation, and financial reporting.",
        "technologies": ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript"],
        "github_url": "https://github.com/amarendra-eediga/odoo-customization",
        "live_url": None,
        "category": "erp",
        "featured": True
    },
    {
        "title": "Django Migration & Full Stack Development",
        "description": "Complete migration of legacy system to Django with modern frontend, REST API, and automated deployment.",
        "technologies": ["Django", "React", "PostgreSQL", "Docker", "AWS"],
        "github_url": "https://github.com/amarendra-eediga/django-migration",
        "live_url": "https://django-migration-demo.herokuapp.com",
        "category": "web",
        "featured": True
    },
    # Add more projects...
]

# To create projects in Django shell:
# python manage.py shell
# from myapp.models import Project
# for project_data in SAMPLE_PROJECTS:
#     Project.objects.create(**project_data)