from django.shortcuts import render
from .forms import FeedbackForm
from .models import  Product


# Create your views here.


def index(request):
    return render(request,'index.html')

def order_online(request):
    product=Product.objects.all()
    return render(request,'orderonline.html',{'product':product})


    
def feed(request):
    if request.method=="POST":
        form=FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form=FeedbackForm()
    return render(request,'form.html',{'form':form})