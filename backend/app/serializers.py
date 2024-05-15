from rest_framework import serializers
from .models import *



class PresidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = President
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    president = PresidentSerializer(many=True, read_only=True)
    class Meta:
        model = Country
        fields = '__all__'