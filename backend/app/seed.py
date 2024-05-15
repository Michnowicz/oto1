from django_seed import Seed
from .models import *
import random


def run():
    newCountry = "Russie"

    seeder = Seed.seeder()
    seeder.add_entity(Country,1,{
        'name' : lambda x : newCountry,
    })
    pks = seeder.execute()
    print(pks)

    country_id = Country.objects.get(name=newCountry)
    seeder = Seed.seeder()
    seeder.add_entity(President,1,{
        'firstname' : "Vladimir",
        'surname' : "Poutin",
        'country' : country_id
    })
    pks = seeder.execute()
    print(pks)

