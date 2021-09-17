from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import UserReview
import re

def index(request):
    if request.method == 'POST':



        star_rating = request.POST.get('star_rating')
        review_heading = request.POST.get('review_heading')
        review_box = request.POST.get('review_box')

        trimmed_review = re.sub(' +',' ',review_box)
        no_space = trimmed_review.replace(" ", "")
        review_depth = len(no_space)

        
        if review_depth >0: 
        

            numWords = len(re.findall(r'\w+', trimmed_review))
            L = (review_depth/numWords)*100

            numSent = trimmed_review.count('.') + trimmed_review.count('!') + trimmed_review.count('?') 
            if numSent==0:
                numSent = 1
            S = (numSent/numWords)*100
            
            cli = 0.0588 * L - 0.296 * S - 15.8
            ari = 4.71 * (L/100) + 0.5 * (100/S) - 21.43
            avg = (cli + ari )/2
            


           # print("depth " + str(review_depth))
            #print("Words " + str(numWords))
            #print("sent " + str(numSent))
            #print("L " + str(L))
           # print("S " + str(S))
            #print("cli " + str(cli))
            #print("ari " + str(ari))
            #print("avg " + str(avg))
            

            prolific_id = request.POST.get('prolific_id')
            u = UserReview(review_heading=review_heading, review_box=review_box, star_rating=star_rating ,
             review_depth = review_depth, ari=ari, cli =cli, avg=avg, prolific_id=prolific_id)
            u.save()

            return redirect(exit)
        else:
            return render(request, 'newapp1/index.html')

    else:
        return render(request, 'newapp1/index.html')



def exit(request):
    return render (request, 'newapp1/exit.html')




def returnIndices(request):
    if request.method == 'POST':
        trimmed_review = request.POST.get('review_box')

        no_space = trimmed_review.replace(" ", "")
        review_depth = len(no_space)

        #numWords = len(re.findall(r'\w+', trimmed_review))
        numWords = len(trimmed_review.split())
        L = (review_depth/numWords)*100

        numSent = trimmed_review.count('.') + trimmed_review.count('!') + trimmed_review.count('?')  

        if numSent==0:
            numSent = 1      
        S = (numSent/numWords)*100
        
        cli = 0.0588 * L - 0.296 * S - 15.8
        ari = 4.71 * (L/100) + 0.5 * (100/S) - 21.43
        avg = (cli + ari )/2
        
        #print(trimmed_review)
        #print("depth " + str(review_depth))
        #print("Words " + str(numWords))
        #print("sent " + str(numSent))
        #print("L " + str(L))
        #print("S " + str(S))
        #print("cli " + str(cli))
        #print("ari " + str(ari))
        #print("avg " + str(avg))

        return JsonResponse({'depth': review_depth, 'cli': cli, 'ari': ari, 'avg': avg})