const data = [
  {
    'ticker': 'ATVI',
    'company': 'Activision Blizzard, Inc',
    'ratings': {
      'buy': 27,
      'hold': 19,
      'sell': 4,
      'total': 50
    },
    'buySummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    },
    'sellSummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    }
  },
  {
    'ticker': 'ADBE',
    'company': 'Adobe Inc.',
    'ratings': {
      'buy': 0,
      'hold': 3,
      'sell': 17,
      'total': 20
    },
    'buySummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    },
    'sellSummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    }
  },
  {
    'ticker': 'AMD',
    'company': 'Advanced Micro Devices, Inc.',
    'ratings': {
      'buy': 21,
      'hold': 14,
      'sell': 24,
      'total': 59
    },
    'buySummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    },
    'sellSummary': {
      '1': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    }
  },
  {
    'ticker': 'ALXN',
    'company': 'Alexion Pharmaceuticals, Inc.',
    'ratings': {
      'buy': 16,
      'hold': 3,
      'sell': 1,
      'total': 20
    },
    'buySummary': {
      '1': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.'
    }
  },
  {
    'ticker': 'ALGN',
    'company': 'Align Technology, Inc.',
    'ratings': {
      'buy': 17,
      'hold': 25,
      'sell': 1,
      'total': 43
    },
    'buySummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.'
    },
    'sellSummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    }
  },
  {
    'ticker': 'GOOG',
    'company': 'Alphabet Inc.',
    'ratings': {
      'buy': 27,
      'hold': 8,
      'sell': 2,
      'total': 37
    },
    'buySummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'GOOGL',
    'company': 'Alphabet Inc.',
    'ratings': {
      'buy': 0,
      'hold': 12,
      'sell': 17,
      'total': 29
    },
    'buySummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    },
    'sellSummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Woke poke synth tbh vegan.'
    }
  },
  {
    'ticker': 'AMZN',
    'company': 'Amazon.com, Inc.',
    'ratings': {
      'buy': 1,
      'hold': 12,
      'sell': 19,
      'total': 32
    },
    'buySummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    },
    'sellSummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '3': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.'
    }
  },
  {
    'ticker': 'AAL',
    'company': 'American Airlines Group, Inc.',
    'ratings': {
      'buy': 29,
      'hold': 23,
      'sell': 14,
      'total': 66
    },
    'buySummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    },
    'sellSummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.'
    }
  },
  {
    'ticker': 'AMGN',
    'company': 'Amgen Inc.',
    'ratings': {
      'buy': 7,
      'hold': 23,
      'sell': 25,
      'total': 55
    },
    'buySummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    },
    'sellSummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    }
  },
  {
    'ticker': 'ADI',
    'company': 'Analog Devices, Inc.',
    'ratings': {
      'buy': 12,
      'hold': 1,
      'sell': 16,
      'total': 29
    },
    'buySummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '2': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'AAPL',
    'company': 'Apple Inc.',
    'ratings': {
      'buy': 18,
      'hold': 2,
      'sell': 28,
      'total': 48
    },
    'buySummary': {
      '1': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.'
    },
    'sellSummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    }
  },
  {
    'ticker': 'AMAT',
    'company': 'Applied Materials, Inc.',
    'ratings': {
      'buy': 21,
      'hold': 8,
      'sell': 5,
      'total': 34
    },
    'buySummary': {
      '1': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    },
    'sellSummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '3': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.'
    }
  },
  {
    'ticker': 'ASML',
    'company': 'ASML Holding N.V.',
    'ratings': {
      'buy': 2,
      'hold': 8,
      'sell': 20,
      'total': 30
    },
    'buySummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Godard raclette sriracha trust fund.',
      '3': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.'
    },
    'sellSummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    }
  },
  {
    'ticker': 'ADSK',
    'company': 'Autodesk, Inc.',
    'ratings': {
      'buy': 10,
      'hold': 25,
      'sell': 2,
      'total': 37
    },
    'buySummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. '
    },
    'sellSummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    }
  },
  {
    'ticker': 'ADP',
    'company': 'Automatic Data Processing, Inc.',
    'ratings': {
      'buy': 17,
      'hold': 26,
      'sell': 9,
      'total': 52
    },
    'buySummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    },
    'sellSummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    }
  },
  {
    'ticker': 'BIDU',
    'company': 'Baidu, Inc.',
    'ratings': {
      'buy': 27,
      'hold': 1,
      'sell': 1,
      'total': 29
    },
    'buySummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    },
    'sellSummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    }
  },
  {
    'ticker': 'BIIB',
    'company': 'Biogen Inc.',
    'ratings': {
      'buy': 6,
      'hold': 26,
      'sell': 11,
      'total': 43
    },
    'buySummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Godard raclette sriracha trust fund.',
      '3': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.'
    },
    'sellSummary': {
      '1': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '2': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'BMRN',
    'company': 'BioMarin Pharmaceutical Inc.',
    'ratings': {
      'buy': 22,
      'hold': 18,
      'sell': 20,
      'total': 60
    },
    'buySummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.'
    },
    'sellSummary': {
      '1': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    }
  },
  {
    'ticker': 'BKNG',
    'company': 'Booking Holdings Inc.',
    'ratings': {
      'buy': 12,
      'hold': 5,
      'sell': 11,
      'total': 28
    },
    'buySummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Godard raclette sriracha trust fund.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    }
  },
  {
    'ticker': 'AVGO',
    'company': 'Broadcom Inc.',
    'ratings': {
      'buy': 21,
      'hold': 7,
      'sell': 7,
      'total': 35
    },
    'buySummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    },
    'sellSummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    }
  },
  {
    'ticker': 'CDNS',
    'company': 'Cadence Design Systems, Inc.',
    'ratings': {
      'buy': 23,
      'hold': 20,
      'sell': 28,
      'total': 71
    },
    'buySummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    },
    'sellSummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    }
  },
  {
    'ticker': 'CELG',
    'company': 'Celgene Corporation',
    'ratings': {
      'buy': 23,
      'hold': 18,
      'sell': 24,
      'total': 65
    },
    'buySummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    },
    'sellSummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.'
    }
  },
  {
    'ticker': 'CERN',
    'company': 'Cerner Corporation',
    'ratings': {
      'buy': 2,
      'hold': 6,
      'sell': 27,
      'total': 35
    },
    'buySummary': {
      '1': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    },
    'sellSummary': {
      '1': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '2': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    }
  },
  {
    'ticker': 'CHTR',
    'company': 'Charter Communications, Inc.',
    'ratings': {
      'buy': 7,
      'hold': 0,
      'sell': 12,
      'total': 19
    },
    'buySummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '3': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.'
    },
    'sellSummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'CHKP',
    'company': 'Check Point Software Technologies Ltd.',
    'ratings': {
      'buy': 11,
      'hold': 6,
      'sell': 3,
      'total': 20
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. '
    },
    'sellSummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'CTAS',
    'company': 'Cintas Corporation',
    'ratings': {
      'buy': 21,
      'hold': 16,
      'sell': 2,
      'total': 39
    },
    'buySummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    },
    'sellSummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    }
  },
  {
    'ticker': 'CSCO',
    'company': 'Cisco Systems, Inc.',
    'ratings': {
      'buy': 15,
      'hold': 0,
      'sell': 10,
      'total': 25
    },
    'buySummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    },
    'sellSummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'CTXS',
    'company': 'Citrix Systems, Inc.',
    'ratings': {
      'buy': 26,
      'hold': 9,
      'sell': 14,
      'total': 49
    },
    'buySummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    },
    'sellSummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.'
    }
  },
  {
    'ticker': 'CTSH',
    'company': 'Cognizant Technology Solutions Corporation',
    'ratings': {
      'buy': 13,
      'hold': 2,
      'sell': 16,
      'total': 31
    },
    'buySummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    },
    'sellSummary': {
      '1': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    }
  },
  {
    'ticker': 'CMCSA',
    'company': 'Comcast Corporation',
    'ratings': {
      'buy': 14,
      'hold': 17,
      'sell': 12,
      'total': 43
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    },
    'sellSummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'COST',
    'company': 'Costco Wholesale Corporation',
    'ratings': {
      'buy': 29,
      'hold': 7,
      'sell': 23,
      'total': 59
    },
    'buySummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    },
    'sellSummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    }
  },
  {
    'ticker': 'CSX',
    'company': 'CSX Corporation',
    'ratings': {
      'buy': 12,
      'hold': 28,
      'sell': 17,
      'total': 57
    },
    'buySummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    },
    'sellSummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.'
    }
  },
  {
    'ticker': 'CTRP',
    'company': 'Ctrip.com International, Ltd.',
    'ratings': {
      'buy': 10,
      'hold': 13,
      'sell': 16,
      'total': 39
    },
    'buySummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'DLTR',
    'company': 'Dollar Tree, Inc.',
    'ratings': {
      'buy': 20,
      'hold': 2,
      'sell': 5,
      'total': 27
    },
    'buySummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    },
    'sellSummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    }
  },
  {
    'ticker': 'EBAY',
    'company': 'eBay Inc.',
    'ratings': {
      'buy': 29,
      'hold': 25,
      'sell': 21,
      'total': 75
    },
    'buySummary': {
      '1': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    },
    'sellSummary': {
      '1': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'EA',
    'company': 'Electronic Arts Inc.',
    'ratings': {
      'buy': 13,
      'hold': 17,
      'sell': 23,
      'total': 53
    },
    'buySummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    },
    'sellSummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    }
  },
  {
    'ticker': 'EXPE',
    'company': 'Expedia Group, Inc.',
    'ratings': {
      'buy': 1,
      'hold': 24,
      'sell': 13,
      'total': 38
    },
    'buySummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '3': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.'
    }
  },
  {
    'ticker': 'FB',
    'company': 'Facebook, Inc.',
    'ratings': {
      'buy': 25,
      'hold': 1,
      'sell': 2,
      'total': 28
    },
    'buySummary': {
      '1': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '2': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    },
    'sellSummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    }
  },
  {
    'ticker': 'FAST',
    'company': 'Fastenal Company',
    'ratings': {
      'buy': 2,
      'hold': 28,
      'sell': 14,
      'total': 44
    },
    'buySummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    },
    'sellSummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'FISV',
    'company': 'Fiserv, Inc.',
    'ratings': {
      'buy': 12,
      'hold': 16,
      'sell': 19,
      'total': 47
    },
    'buySummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. '
    },
    'sellSummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    }
  },
  {
    'ticker': 'GILD',
    'company': 'Gilead Sciences, Inc.',
    'ratings': {
      'buy': 4,
      'hold': 25,
      'sell': 19,
      'total': 48
    },
    'buySummary': {
      '1': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '2': 'Godard raclette sriracha trust fund.',
      '3': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.'
    },
    'sellSummary': {
      '1': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '2': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    }
  },
  {
    'ticker': 'HAS',
    'company': 'Hasbro, Inc.',
    'ratings': {
      'buy': 13,
      'hold': 8,
      'sell': 6,
      'total': 27
    },
    'buySummary': {
      '1': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    },
    'sellSummary': {
      '1': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    }
  },
  {
    'ticker': 'HSIC',
    'company': 'Henry Schein, Inc.',
    'ratings': {
      'buy': 15,
      'hold': 5,
      'sell': 22,
      'total': 42
    },
    'buySummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    },
    'sellSummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.'
    }
  },
  {
    'ticker': 'IDXX',
    'company': 'IDEXX Laboratories, Inc.',
    'ratings': {
      'buy': 18,
      'hold': 16,
      'sell': 18,
      'total': 52
    },
    'buySummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    },
    'sellSummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '3': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.'
    }
  },
  {
    'ticker': 'ILMN',
    'company': 'Illumina, Inc.',
    'ratings': {
      'buy': 5,
      'hold': 7,
      'sell': 17,
      'total': 29
    },
    'buySummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.'
    },
    'sellSummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.'
    }
  },
  {
    'ticker': 'INCY',
    'company': 'Incyte Corporation',
    'ratings': {
      'buy': 4,
      'hold': 13,
      'sell': 24,
      'total': 41
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.'
    },
    'sellSummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'INTC',
    'company': 'Intel Corporation',
    'ratings': {
      'buy': 14,
      'hold': 16,
      'sell': 4,
      'total': 34
    },
    'buySummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    },
    'sellSummary': {
      '1': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '2': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    }
  },
  {
    'ticker': 'INTU',
    'company': 'Intuit Inc.',
    'ratings': {
      'buy': 6,
      'hold': 11,
      'sell': 15,
      'total': 32
    },
    'buySummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'ISRG',
    'company': 'Intuitive Surgical, Inc.',
    'ratings': {
      'buy': 24,
      'hold': 2,
      'sell': 21,
      'total': 47
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.'
    },
    'sellSummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    }
  },
  {
    'ticker': 'JBHT',
    'company': 'J.B. Hunt Transport Services, Inc.',
    'ratings': {
      'buy': 17,
      'hold': 5,
      'sell': 28,
      'total': 50
    },
    'buySummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '3': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.'
    },
    'sellSummary': {
      '1': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    }
  },
  {
    'ticker': 'JD',
    'company': 'JD.com, Inc.',
    'ratings': {
      'buy': 29,
      'hold': 6,
      'sell': 11,
      'total': 46
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    },
    'sellSummary': {
      '1': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '2': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'KLAC',
    'company': 'KLA-Tencor Corporation',
    'ratings': {
      'buy': 24,
      'hold': 27,
      'sell': 26,
      'total': 77
    },
    'buySummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.'
    },
    'sellSummary': {
      '1': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.'
    }
  },
  {
    'ticker': 'LRCX',
    'company': 'Lam Research Corporation',
    'ratings': {
      'buy': 11,
      'hold': 24,
      'sell': 28,
      'total': 63
    },
    'buySummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. '
    },
    'sellSummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'LBTYA',
    'company': 'Liberty Global plc',
    'ratings': {
      'buy': 0,
      'hold': 13,
      'sell': 29,
      'total': 42
    },
    'buySummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    },
    'sellSummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    }
  },
  {
    'ticker': 'LBTYK',
    'company': 'Liberty Global plc',
    'ratings': {
      'buy': 15,
      'hold': 26,
      'sell': 29,
      'total': 70
    },
    'buySummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    },
    'sellSummary': {
      '1': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'LULU',
    'company': 'lululemon athletica inc.',
    'ratings': {
      'buy': 1,
      'hold': 26,
      'sell': 29,
      'total': 56
    },
    'buySummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.'
    },
    'sellSummary': {
      '1': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '2': 'Godard raclette sriracha trust fund.',
      '3': 'Woke poke synth tbh vegan.'
    }
  },
  {
    'ticker': 'MAR',
    'company': 'Marriott International',
    'ratings': {
      'buy': 19,
      'hold': 6,
      'sell': 6,
      'total': 31
    },
    'buySummary': {
      '1': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '2': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '3': 'Woke poke synth tbh vegan.'
    },
    'sellSummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Godard raclette sriracha trust fund.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'MXIM',
    'company': 'Maxim Integrated Products, Inc.',
    'ratings': {
      'buy': 9,
      'hold': 10,
      'sell': 28,
      'total': 47
    },
    'buySummary': {
      '1': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.'
    },
    'sellSummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    }
  },
  {
    'ticker': 'MELI',
    'company': 'MercadoLibre, Inc.',
    'ratings': {
      'buy': 10,
      'hold': 4,
      'sell': 24,
      'total': 38
    },
    'buySummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.'
    },
    'sellSummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    }
  },
  {
    'ticker': 'MCHP',
    'company': 'Microchip Technology Incorporated',
    'ratings': {
      'buy': 16,
      'hold': 10,
      'sell': 11,
      'total': 37
    },
    'buySummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.'
    },
    'sellSummary': {
      '1': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    }
  },
  {
    'ticker': 'MU',
    'company': 'Micron Technology, Inc.',
    'ratings': {
      'buy': 8,
      'hold': 28,
      'sell': 25,
      'total': 61
    },
    'buySummary': {
      '1': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '2': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '3': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.'
    },
    'sellSummary': {
      '1': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.'
    }
  },
  {
    'ticker': 'MSFT',
    'company': 'Microsoft Corporation',
    'ratings': {
      'buy': 28,
      'hold': 28,
      'sell': 29,
      'total': 85
    },
    'buySummary': {
      '1': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Woke poke synth tbh vegan.'
    },
    'sellSummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'MDLZ',
    'company': 'Mondelez International, Inc.',
    'ratings': {
      'buy': 14,
      'hold': 7,
      'sell': 23,
      'total': 44
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    },
    'sellSummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'MNST',
    'company': 'Monster Beverage Corporation',
    'ratings': {
      'buy': 9,
      'hold': 23,
      'sell': 29,
      'total': 61
    },
    'buySummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    },
    'sellSummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'MYL',
    'company': 'Mylan N.V.',
    'ratings': {
      'buy': 28,
      'hold': 29,
      'sell': 16,
      'total': 73
    },
    'buySummary': {
      '1': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    },
    'sellSummary': {
      '1': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    }
  },
  {
    'ticker': 'NTAP',
    'company': 'NetApp, Inc.',
    'ratings': {
      'buy': 14,
      'hold': 25,
      'sell': 24,
      'total': 63
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    },
    'sellSummary': {
      '1': 'Woke poke synth tbh vegan.',
      '2': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    }
  },
  {
    'ticker': 'NTES',
    'company': 'NetEase, Inc.',
    'ratings': {
      'buy': 22,
      'hold': 6,
      'sell': 13,
      'total': 41
    },
    'buySummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    },
    'sellSummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    }
  },
  {
    'ticker': 'NFLX',
    'company': 'Netflix, Inc.',
    'ratings': {
      'buy': 16,
      'hold': 2,
      'sell': 23,
      'total': 41
    },
    'buySummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.'
    },
    'sellSummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    }
  },
  {
    'ticker': 'NVDA',
    'company': 'NVIDIA Corporation',
    'ratings': {
      'buy': 18,
      'hold': 13,
      'sell': 16,
      'total': 47
    },
    'buySummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.'
    },
    'sellSummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    }
  },
  {
    'ticker': 'NXPI',
    'company': 'NXP Semiconductors N.V.',
    'ratings': {
      'buy': 20,
      'hold': 20,
      'sell': 1,
      'total': 41
    },
    'buySummary': {
      '1': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.'
    },
    'sellSummary': {
      '1': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.'
    }
  },
  {
    'ticker': 'ORLY',
    'company': 'O\'Reilly Automotive, Inc.',
    'ratings': {
      'buy': 20,
      'hold': 17,
      'sell': 9,
      'total': 46
    },
    'buySummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.'
    },
    'sellSummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '3': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.'
    }
  },
  {
    'ticker': 'PCAR',
    'company': 'PACCAR Inc.',
    'ratings': {
      'buy': 24,
      'hold': 0,
      'sell': 22,
      'total': 46
    },
    'buySummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    },
    'sellSummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'PAYX',
    'company': 'Paychex, Inc.',
    'ratings': {
      'buy': 7,
      'hold': 26,
      'sell': 7,
      'total': 40
    },
    'buySummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    },
    'sellSummary': {
      '1': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    }
  },
  {
    'ticker': 'PYPL',
    'company': 'PayPal Holdings, Inc.',
    'ratings': {
      'buy': 26,
      'hold': 4,
      'sell': 20,
      'total': 50
    },
    'buySummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    },
    'sellSummary': {
      '1': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. ',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.'
    }
  },
  {
    'ticker': 'PEP',
    'company': 'PepsiCo, Inc.',
    'ratings': {
      'buy': 22,
      'hold': 25,
      'sell': 21,
      'total': 68
    },
    'buySummary': {
      '1': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    },
    'sellSummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'QCOM',
    'company': 'QUALCOMM Incorporated',
    'ratings': {
      'buy': 29,
      'hold': 11,
      'sell': 28,
      'total': 68
    },
    'buySummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.'
    },
    'sellSummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.'
    }
  },
  {
    'ticker': 'REGN',
    'company': 'Regeneron Pharmaceuticals, Inc.',
    'ratings': {
      'buy': 9,
      'hold': 22,
      'sell': 18,
      'total': 49
    },
    'buySummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    },
    'sellSummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.'
    }
  },
  {
    'ticker': 'ROST',
    'company': 'Ross Stores, Inc.',
    'ratings': {
      'buy': 22,
      'hold': 20,
      'sell': 10,
      'total': 52
    },
    'buySummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    },
    'sellSummary': {
      '1': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'SIRI',
    'company': 'Sirius XM Holdings Inc.',
    'ratings': {
      'buy': 20,
      'hold': 17,
      'sell': 20,
      'total': 57
    },
    'buySummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Godard raclette sriracha trust fund.'
    },
    'sellSummary': {
      '1': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.'
    }
  },
  {
    'ticker': 'SWKS',
    'company': 'Skyworks Solutions, Inc.',
    'ratings': {
      'buy': 7,
      'hold': 18,
      'sell': 11,
      'total': 36
    },
    'buySummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
      '3': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.'
    },
    'sellSummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Godard raclette sriracha trust fund.'
    }
  },
  {
    'ticker': 'SBUX',
    'company': 'Starbucks Corporation',
    'ratings': {
      'buy': 1,
      'hold': 10,
      'sell': 21,
      'total': 32
    },
    'buySummary': {
      '1': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '2': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '3': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. '
    },
    'sellSummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    }
  },
  {
    'ticker': 'SYMC',
    'company': 'Symantec Corporation',
    'ratings': {
      'buy': 8,
      'hold': 3,
      'sell': 5,
      'total': 16
    },
    'buySummary': {
      '1': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '2': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    },
    'sellSummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.'
    }
  },
  {
    'ticker': 'SNPS',
    'company': 'Synopsys, Inc.',
    'ratings': {
      'buy': 8,
      'hold': 27,
      'sell': 14,
      'total': 49
    },
    'buySummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '3': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. '
    },
    'sellSummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    }
  },
  {
    'ticker': 'TMUS',
    'company': 'T-Mobile US, Inc.',
    'ratings': {
      'buy': 10,
      'hold': 19,
      'sell': 5,
      'total': 34
    },
    'buySummary': {
      '1': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    },
    'sellSummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    }
  },
  {
    'ticker': 'TTWO',
    'company': 'Take-Two Interactive Software, Inc.',
    'ratings': {
      'buy': 15,
      'hold': 1,
      'sell': 25,
      'total': 41
    },
    'buySummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.'
    },
    'sellSummary': {
      '1': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.'
    }
  },
  {
    'ticker': 'TSLA',
    'company': 'Tesla, Inc. ',
    'ratings': {
      'buy': 9,
      'hold': 8,
      'sell': 17,
      'total': 34
    },
    'buySummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    },
    'sellSummary': {
      '1': 'Godard raclette sriracha trust fund.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.'
    }
  },
  {
    'ticker': 'TXN',
    'company': 'Texas Instruments Incorporated',
    'ratings': {
      'buy': 7,
      'hold': 21,
      'sell': 14,
      'total': 42
    },
    'buySummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '3': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.'
    },
    'sellSummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'KHC',
    'company': 'The Kraft Heinz Company',
    'ratings': {
      'buy': 22,
      'hold': 13,
      'sell': 29,
      'total': 64
    },
    'buySummary': {
      '1': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.'
    },
    'sellSummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.'
    }
  },
  {
    'ticker': 'FOX',
    'company': 'Twenty-First Century Fox, Inc.',
    'ratings': {
      'buy': 21,
      'hold': 1,
      'sell': 6,
      'total': 28
    },
    'buySummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    },
    'sellSummary': {
      '1': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '2': 'Godard raclette sriracha trust fund.',
      '3': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.'
    }
  },
  {
    'ticker': 'FOXA',
    'company': 'Twenty-First Century Fox, Inc.',
    'ratings': {
      'buy': 0,
      'hold': 19,
      'sell': 19,
      'total': 38
    },
    'buySummary': {
      '1': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
      '2': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '3': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.'
    },
    'sellSummary': {
      '1': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.'
    }
  },
  {
    'ticker': 'ULTA',
    'company': 'Ulta Beauty, Inc.',
    'ratings': {
      'buy': 25,
      'hold': 10,
      'sell': 4,
      'total': 39
    },
    'buySummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
      '3': 'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry  of yr succulents. '
    },
    'sellSummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.'
    }
  },
  {
    'ticker': 'UAL',
    'company': 'United Continental Holdings, Inc.',
    'ratings': {
      'buy': 7,
      'hold': 14,
      'sell': 5,
      'total': 26
    },
    'buySummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '3': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.'
    },
    'sellSummary': {
      '1': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.'
    }
  },
  {
    'ticker': 'VRSN',
    'company': 'VeriSign, Inc.',
    'ratings': {
      'buy': 1,
      'hold': 11,
      'sell': 20,
      'total': 32
    },
    'buySummary': {
      '1': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '2': 'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    },
    'sellSummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
      '3': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.'
    }
  },
  {
    'ticker': 'VRSK',
    'company': 'Verisk Analytics, Inc.',
    'ratings': {
      'buy': 22,
      'hold': 19,
      'sell': 9,
      'total': 50
    },
    'buySummary': {
      '1': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '2': 'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
      '3': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.'
    },
    'sellSummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.'
    }
  },
  {
    'ticker': 'VRTX',
    'company': 'Vertex Pharmaceuticals Incorporated',
    'ratings': {
      'buy': 28,
      'hold': 4,
      'sell': 20,
      'total': 52
    },
    'buySummary': {
      '1': 'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.'
    },
    'sellSummary': {
      '1': 'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel  of twee pug keytar poutine biodiesel.',
      '2': 'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    }
  },
  {
    'ticker': 'WBA',
    'company': 'Walgreens Boots Alliance, Inc.',
    'ratings': {
      'buy': 4,
      'hold': 6,
      'sell': 5,
      'total': 15
    },
    'buySummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    },
    'sellSummary': {
      '1': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.',
      '2': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '3': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.'
    }
  },
  {
    'ticker': 'WDC',
    'company': 'Western Digital Corporation',
    'ratings': {
      'buy': 9,
      'hold': 7,
      'sell': 26,
      'total': 42
    },
    'buySummary': {
      '1': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '2': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    },
    'sellSummary': {
      '1': 'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.'
    }
  },
  {
    'ticker': 'WLTW',
    'company': 'Willis Towers Watson Public Limited Company',
    'ratings': {
      'buy': 15,
      'hold': 28,
      'sell': 20,
      'total': 63
    },
    'buySummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
      '3': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.'
    },
    'sellSummary': {
      '1': 'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
      '2': 'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
      '3': 'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.'
    }
  },
  {
    'ticker': 'WDAY',
    'company': 'Workday, Inc.',
    'ratings': {
      'buy': 27,
      'hold': 25,
      'sell': 0,
      'total': 52
    },
    'buySummary': {
      '1': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
      '2': 'Woke poke synth tbh vegan.',
      '3': 'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.'
    },
    'sellSummary': {
      '1': 'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
      '2': 'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
      '3': 'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn  of street art distillery chicharrones.'
    }
  }
];

module.exports = data;