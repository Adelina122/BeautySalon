from django.contrib import admin
from firstapp.models import Master, Service, Masters_services


@admin.register(Master)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("masterName", "experience", "phone", "past")
    list_filter = ("masterName", "experience")


@admin.register(Service)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("title", "content")


@admin.register(Masters_services)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("price", "serviceTime")
    # list_filter = ("price", "serviceTime")

    # class ServiceAdmin(admin.ModelAdmin):
    #     def name_master(obj):
    #         return obj.master.name
    #
    #     list_filter = ['price', 'master__name']
    #     list_display = ('title', 'price', name_master)
    #     list_display_links = ('title',)
    #
    #     # list_display = ('title', 'content', 'price')
    #
    # admin.site.register(Master)
    # admin.site.register(Service, ServiceAdmin)
