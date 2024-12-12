from django.shortcuts import render,redirect, get_object_or_404
from django.contrib.auth.models import User,auth
from django.contrib import messages
from .models import MoodEntry

# Create your views here.

def index(request):
    return render(request,'index.html')

def signup(request):
    if request.method== 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirmpassword = request.POST['confirmpassword']
        
        if password==confirmpassword:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email Already Registered')
                return redirect('signup')
            
            elif User.objects.filter(username=username).exists():
                messages.info(request,'Username Already Used')
                return redirect('signup')
            
            else:
                user =User.objects.create_user(username=username, email=email, password=password)
                user.save()
                return redirect('login')
        else:
            messages.info(request,'Password Not Matched')
            return render(request,'signup.html')
   
    else:    
        return render(request,'signup.html')


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            auth.login(request,user)
            return redirect('/')
        else:
            messages.info(request,'Credentials Invalid')
            return redirect('login')
    else:
        return render(request,'login.html')
    
def logout(request):
    auth.logout(request)
    return redirect('/')

def journal(request):
    return render(request,'journal.html')


def myjournal(request):
    mood_entries = MoodEntry.objects.all()  # Fetch all mood entries from the database
    return render(request, 'myjournal.html', {'mood_entries': mood_entries})


def loc(request):
    return render(request,'loc.html')

def help1(request):
    return render(request,'help1.html')


from django.contrib.auth.decorators import login_required

@login_required
def save_mood(request):
    if request.method == 'POST':
        mood = request.POST.get('mood')
        weather = request.POST.get('weather')
        people = request.POST.get('people')
        emotions = request.POST.get('emotions')
        notes = request.POST.get('notes')
        image = request.FILES.get('image')

        # Get the currently logged-in user
        user = request.user

        # Create the mood entry with the user
        mood_entry = MoodEntry.objects.create(
            user=user,
            mood=mood,
            weather=weather,
            people=people,
            emotions=emotions,
            notes=notes,
            image=image
        )
        # Optionally, you can redirect the user to a success page
        return redirect('myjournal')  
    else:
        # Handle GET request, render form
        return render(request, 'journal.html')

    
def delete_mood_entry(request, mood_entry_id):
    mood_entry = get_object_or_404(MoodEntry, pk=mood_entry_id)
    mood_entry.delete()
    return redirect('myjournal')