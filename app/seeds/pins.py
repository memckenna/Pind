from app.models import db, Pin

def seed_pins():
    #Home Decor
    pin1 = Pin(title='Beautiful Kitchen with Natural Light and Warm Touches', description='This kitchen has natural beauty running through every inch of it', source_link='github.com/memckenna', photo_url='https://i.pinimg.com/564x/3c/21/b6/3c21b639a8d687e5f661d752428c986e.jpg', user_id=1)
    pin2 = Pin(title='Clean Minimalistic Kitchen', description='This kitchen provides all the Golden Coast vibes.', source_link='github.com/memckenna', photo_url='https://www.bosshunting.com.au/wp-content/uploads/2021/06/2017002314_13_1_210513_121520-w5464-h8192.jpg', user_id=1)
    pin3 = Pin(title='How to Create a Relaxing Space', description='', source_link='', photo_url='https://i.pinimg.com/564x/71/d5/a9/71d5a9fccb32eef68fd7c624f2bf0f07.jpg', user_id=2)
    pin4 = Pin(title='Back Yard Dreams', description='', source_link='', photo_url='https://i.pinimg.com/originals/39/7f/9e/397f9ed06d0f88bd144d6a80ef9808f0.jpg', user_id=2)
    pin5= Pin(title='Clean minimal living room', description='', source_link='', photo_url='https://i.pinimg.com/originals/b1/ba/ce/b1bace8c412a54865319571c3ace9803.jpg', user_id=1)
    pin13 = Pin(title='Simple Clean Open Kitchen', description='Loving this open concept kitchen.', source_link='', photo_url='https://i.pinimg.com/564x/7c/ee/41/7cee41667ed435dcbf51ba156c237903.jpg', user_id=1)
    pin14 = Pin(title='Hand-Woven Cross Cord Bar Stool', description='Outdoor bar stools.', source_link='github.com/memckenna', photo_url='https://i.pinimg.com/564x/70/39/bd/7039bdc00dac71f7333d446b2ad23b0f.jpg', user_id=1)
    pin18 = Pin(title='Clean Simple Master Bedroom Decor', description='', source_link='', photo_url='https://i.pinimg.com/564x/1c/d0/ea/1cd0ea8b9d0f8e1c9a11caa96b6f90be.jpg', user_id=2)
    pin19 = Pin(title='Living and Dining Inspiration', description='', source_link='', photo_url='https://i.pinimg.com/564x/cc/3c/a4/cc3ca4375d876efc1cb2f2dd58230175.jpg', user_id=1)
    pin20 = Pin(title='Modern Living Decor', description='', source_link='', photo_url='https://i.pinimg.com/564x/b5/41/ec/b541eceb91c8dff2368b914112f6869e.jpg', user_id=1)
    pin27 = Pin(title='Dream Outdoor Space', description='', source_link='', photo_url='https://i.pinimg.com/564x/fc/15/7f/fc157fd31380ee1d6e7e87a38aad4611.jpg', user_id=1)
    pin29 = Pin(title='How to Have an Outdoor Picnic the Correct Way', description='', source_link='', photo_url='https://i.pinimg.com/564x/f3/19/b0/f319b096ef90dbf89f52b621fb96b72f.jpg', user_id=1)
    pin31 = Pin(title='Neutral Living Room Vibes', description='Loving the clean neutrals', source_link='', photo_url='https://i.pinimg.com/564x/06/0c/6b/060c6b52c9e7f704391848bbcf7d3d25.jpg', user_id=1)
    pin34 = Pin(title='Friday Decor Finds', description='', source_link='', photo_url='https://i.pinimg.com/564x/67/c4/9b/67c49bef56ef7b4609eb16f8e9ea86f1.jpg', user_id=2)

    #Food/Drinks
    pin6 = Pin(title='Cotton Candy Rose', description='Rose all day', source_link='', photo_url='https://i.pinimg.com/originals/12/23/7b/12237b91c96b2377f0af8bd01d493a3c.jpg', user_id=3)
    pin7 = Pin(title='Winter White Cheese Board', description='', source_link='github.com/memckenna', photo_url='https://fashionablehostess.com/wp-content/uploads/2020/01/Cheese-Board-DIY.jpg', user_id=3)
    pin15 = Pin(title='Lemon, Almond, & Raspberry Layer Cake', description='', source_link='github.com/memckenna', photo_url='https://i.pinimg.com/564x/e9/2f/76/e92f765e6bbb76b81e879d713f804c60.jpg', user_id=1)
    pin21 = Pin(title='Ice Cream Sammies in All Flavors', description='', source_link='', photo_url='https://i.pinimg.com/564x/d4/1d/4d/d41d4d4b1f65ee926aea8af200f9e588.jpg', user_id=1)
    pin23 = Pin(title='Blackberry Crepes with Blackberry Whip Creme', description='', source_link='', photo_url='https://i.pinimg.com/564x/70/2c/9d/702c9d70dd4c5d465f1ad0c6df6ad0ce.jpg', user_id=1)
    pin26 = Pin(title='Lemon Ricotta Cake with Toasted Pistachio Frosting', description='Vegetarian Gluten free', source_link='', photo_url='https://i.pinimg.com/564x/2c/9b/f1/2c9bf151c650471196b3049bd538d51c.jpg', user_id=1)
    pin28 = Pin(title='Pinapple Dreams', description='', source_link='', photo_url='https://i.pinimg.com/564x/09/1c/9c/091c9c71eacc122e4898bb18bfefcebf.jpg', user_id=3)
    pin36 = Pin(title='rhubarb + rosé ramos gin fizzes | garnished with strawberries', description='rhubarb + rosé ramos gin fizzes', source_link='', photo_url='https://i.pinimg.com/564x/c6/5d/b7/c65db77c66cfd89c0f37b0afb2c6a164.jpg', user_id=1)
    pin37 = Pin(title='Christmas Cocktails | Floral Ice Cubs', description='Perfect cocktail to serve when hosting during Christmas', source_link='', photo_url='https://i.pinimg.com/564x/b9/f6/00/b9f6002ca52e8aab916ad2c2f49222d9.jpg', user_id=3)
    pin38 = Pin(title='Melon Lemonade Recipe | Refreshing Drinks | Cocktails', description='Melon Lemonade garnished with a floral arangement', source_link='', photo_url='https://i.pinimg.com/564x/3e/00/fe/3e00feb347712fc5ff4016dcf1eaa930.jpg', user_id=3)
    pin39 = Pin(title='Floral Cocktail', description='beautiful floral cocktail with a layer of froth and edible flowers on top', source_link='', photo_url='https://i.pinimg.com/564x/22/d2/d8/22d2d821ec61fa98483198e4be7d542d.jpg', user_id=1)
    pin40 = Pin(title='Lavender Gin and Tonic Punch', description='Lavender Gin and Tonic Punch - Sugar and Charm Sugar and Charm', source_link='', photo_url='https://i.pinimg.com/564x/f9/20/f1/f920f1151d89e41724d7a58b1bb5d93e.jpg', user_id=1)

    #Fashion
    pin8 = Pin(title='Neutrals', description='Minimalistic stlye', source_link='', photo_url='https://i.pinimg.com/564x/ed/ef/01/edef01b34b206d02ec7d148f429a908f.jpg', user_id=1)
    pin9 = Pin(title='Ivory Jumpsuit Paired with a Touch of Gold', description='', source_link='', photo_url='https://i.pinimg.com/originals/38/c1/93/38c193facc53f24c918566302265f271.jpg', user_id=1)
    pin10 = Pin(title='Pretty in Pink', description='Dreaming of a blush pink wedding dress for your big day?', source_link='', photo_url='https://greenweddingshoes.com/wp-content/uploads/2020/02/80837121_212124316462201_6613679992556936424_n.jpg', user_id=1)
    pin17 = Pin(title='Linen Shirt Dress', description='', source_link='', photo_url='https://i.pinimg.com/736x/9d/39/04/9d390426e41af16b238aaa2e0a78fc89.jpg', user_id=1)

    #Pretty
    pin16 = Pin(title='Blue Hydrangeas', description='', source_link='', photo_url='https://i.pinimg.com/564x/da/37/d5/da37d53c6549bd59ecd00e4642f52583.jpg', user_id=1)
    pin25 = Pin(title='Dreamy Store Front', description='', source_link='', photo_url='https://i.pinimg.com/564x/5a/65/56/5a6556bf84e20a7208befe3f7da9428b.jpg', user_id=1)
    pin32 = Pin(title='Floral Artist', description='', source_link='', photo_url='https://i.pinimg.com/564x/5d/ba/0e/5dba0e9766d71d88b432f4e5b9e1198f.jpg', user_id=1)


    #Travel
    pin11 = Pin(title='Greece', description='Dreaming of Greece', source_link='', photo_url='https://i.pinimg.com/originals/22/ec/3b/22ec3b063af6ddb5f81cef50e34508a4.jpg', user_id=4)
    pin12= Pin(title='Annecy, France', description='Annecy is quite possibly one of the prettiest lakeside towns in the world.', source_link='', photo_url='https://images.squarespace-cdn.com/content/v1/5e279fcbbf605a1b49d6d862/1580178929542-U8KYKYQ1SC356XYKIEVO/IMG_1701Annecy-France-683x1024.jpg?format=1500w', user_id=4)
    pin22 = Pin(title='Santorini - Anastasia Hotel', description='', source_link='', photo_url='https://i.pinimg.com/564x/1d/c7/31/1dc731b2c7a964da28de6ff6cfc681c5.jpg', user_id=1)
    pin24 = Pin(title='Tuscany, Dream Wedding at our Villa', description='', source_link='', photo_url='https://i.pinimg.com/564x/bf/b3/d5/bfb3d54a9abfc0cc3f2865eb0c5e1b6a.jpg', user_id=1)
    pin30 = Pin(title='Hotel Casa Cook a Rhodes', description='', source_link='', photo_url='https://i.pinimg.com/564x/2e/f0/e9/2ef0e92573ed0700fdabc909dd2cd284.jpg', user_id=1)
    pin33 = Pin(title='Travel Guide to Paros, Greece', description='', source_link='', photo_url='https://i.pinimg.com/564x/41/94/b1/4194b1039439e0e1e97a8172c5688917.jpg', user_id=1)
    pin35 = Pin(title='Cutest Cafe in Paris', description='', source_link='', photo_url='https://i.pinimg.com/564x/42/9c/ea/429cea8bd8b0f79efd7eafc1f96ad301.jpg', user_id=1)




    # pin = Pin(title='', description='', source_link='', photo_url='', user_id=)
    # pin = Pin(title='', description='', source_link='', photo_url='', user_id=)
    # pin = Pin(title='', description='', source_link='', photo_url='', user_id=)
    # pin = Pin(title='', description='', source_link='', photo_url='', user_id=)


    db.session.add(pin1)
    db.session.add(pin2)
    db.session.add(pin3)
    db.session.add(pin4)
    db.session.add(pin5)
    db.session.add(pin6)
    db.session.add(pin7)
    db.session.add(pin8)
    db.session.add(pin9)
    db.session.add(pin10)
    db.session.add(pin11)
    db.session.add(pin12)
    db.session.add(pin13)
    db.session.add(pin14)
    db.session.add(pin15)
    db.session.add(pin16)
    db.session.add(pin17)
    db.session.add(pin18)
    db.session.add(pin19)
    db.session.add(pin20)
    db.session.add(pin21)
    db.session.add(pin22)
    db.session.add(pin23)
    db.session.add(pin24)
    db.session.add(pin25)
    db.session.add(pin26)
    db.session.add(pin27)
    db.session.add(pin28)
    db.session.add(pin29)
    db.session.add(pin30)
    db.session.add(pin31)
    db.session.add(pin32)
    db.session.add(pin33)
    db.session.add(pin34)
    db.session.add(pin35)
    db.session.add(pin36)
    db.session.add(pin37)
    db.session.add(pin38)
    db.session.add(pin39)
    db.session.add(pin40)

    db.session.commit()



def undo_pins():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
