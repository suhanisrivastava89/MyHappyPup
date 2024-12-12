from django.urls import path
from . import views
from .views import save_mood

# from .views import save_journal_entry

urlpatterns=[
    path('',views.index, name='index'),
    path('signup',views.signup,name='signup'),
    path('login',views.login,name='login'),
    path('logout',views.logout,name='logout'),
    path('journal',views.journal,name='journal'),
    path('myjournal',views.myjournal,name='myjournal'),
    path('loc',views.loc,name='loc'),
    path('help1',views.help1,name='help1'),
    path('save_mood/', save_mood, name='save_mood'),
    path('delete/<int:mood_entry_id>/', views.delete_mood_entry, name='delete_mood_entry'),

    # path('save_entry/', views.save_entry, name='save_entry')
    # path('home2',views.home2,name='home2'),

]