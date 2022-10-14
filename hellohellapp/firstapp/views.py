from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .models import Master, Service, Masters_services


def index(request, paramedik="Hello! "):
    beauty = request.GET.get("beauty", "Bye)")
    data = {"master": paramedik, "beauty": beauty}
    return render(request, "index.html", context=data)


def index2(request):
    getMasters_serv = Masters_services.objects.all()
    print(getMasters_serv)
    return render(request, "index2.html", {'masters_services': getMasters_serv})


def index3(request):
    return render(request, "index3.html")


def index4(request):
    return render(request, "index4.html")


def localstorage(request):
    return render(request, "localstorage.html")


@csrf_exempt
@login_required(login_url='/accounts/login/')
def masters_services(request):
    masters = Master.objects.all()
    services = Service.objects.all()
    if request.method == 'POST':
        getMaster = Master.objects.get(pk=request.POST['masterName'])
        getService = Service.objects.get(pk=request.POST['title'])
        price = request.POST['price']
        serviceTime = request.POST['serviceTimesd']
        masters_services = Masters_services(
            master=getMaster,
            service=getService,
            price=price,
            serviceTime=serviceTime)

        masters_services.save()
        return redirect('servicess')

    return render(request, "vvMaster.html", {"masters": masters, "services": services})
# @csrf_exempt
# def master(request):
#     if request.method == 'GET':
#         return render(request, 'vvMaster.html')
#     if request.method == 'POST':
#         # if form.is_valid():
#         #     form.save()
#         masterName = request.POST["masterName"]
#         # newMaster = Master(name=masterName)
#         # newMaster.save()
#         masters = Service.objects.get(master=masterName)
#         masters.save()
#         serviceName = request.POST["serviceName"]
#         newService = Service(title=serviceName)
#         newService.save()
#         services = Service.objects.get(title=serviceName)
#
#         price = request.POST["price"]
#         newPrice = Service(price=price)
#         newPrice.save()
#         prices = Service.objects.get(price=price)
#         return render(request, 'vvMaster.html', {'masters':  masters, 'services': services, 'prices': prices})
