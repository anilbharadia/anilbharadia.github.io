# Google Sheets

## Highlight row based on iso week

![img.png](highlight-row-based-on-iso-week.png)

Formula:
```
=$B2=CONCATENATE(ISOWEEKNUM(now()), "/", ISOWEEKNUM(now()) + 1)
```

[Example File](https://docs.google.com/spreadsheets/d/1xxExPaGmgOYi_yI96CcUZ8uu6g4v-5fRnU09E0CfhPo/edit?usp=sharing){:target="_blank"}