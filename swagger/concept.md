


GET /transactions/
filter:
- from
- to
- tag
- account
- search
sort:
- field
- type

GET /report/tags/
filter:
- from
- to
- tag
- account

GET /report/yearoveryear

GET /tags/

POST /transactions/csv/

POST /transactions/
- date
- value
- type
- name
- description
- ref
- booked
- valuta

PUT /transactions/<id>

POST /tags/
- name
- description
- color

PUT /tags/<id>



