from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response




def index(request):
    countries = Country.objects.all()
    countries_serializers = CountrySerializer(countries, many=True)

    presidents = President.objects.all()
    presidents_serializers = PresidentSerializer(presidents, many=True)

    data = {
        "countries": countries_serializers.data,
        "presidents": presidents_serializers.data
    }
    
    return JsonResponse({"data": data})


@api_view(["POST"])
def create_country(request):
    if request.method == 'POST':
        country = CountrySerializer(data=request.data)
        if country.is_valid():
            country.save()
            return Response(country.data)
        return Response(country.errors)


@api_view(["POST"])
def create_president(request):
    if request.method == "POST":
        president_data = request.data.get("president", {})
        country_data = request.data.get("country", {})
    
    country_serializer = CountrySerializer(data=country_data)
    if country_serializer.is_valid():
        country = country_serializer.save()
        country_id = country.id

        president_data['country'] = country_id

        president_serializer = PresidentSerializer(data=president_data)
        if president_serializer.is_valid():
            president = president_serializer.save()
            return Response({"message" : "nouvelle donnée ajoutée"})
    
