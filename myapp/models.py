from django.db import models

# Create your models here.
# Product Model
class Product(models.Model):
    name=models.CharField(max_length=100)
    price=models.DecimalField(max_digits=10,decimal_places=4)
    image=models.ImageField(upload_to='post_image')
    
    def __str__(self):
        return self.name
    
    # Feedback form
class Feedback(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=50)
    message=models.TextField()  
   
    def __str__(self):
        return self.name


