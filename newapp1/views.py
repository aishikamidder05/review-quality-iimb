from django.shortcuts import render
from .models import UserReview

def index(request):
    if request.method == 'POST':

        star_rating = request.POST.get('star_rating')
        review_heading = request.POST.get('review_heading')
        review_box = request.POST.get('review_box')

        u = UserReview(review_heading=review_heading, review_box=review_box, star_rating=star_rating)
        u.save()

        return render(request, 'newapp1/index.html')
    else:
        return render(request, 'newapp1/index.html')

# Create your views here.
