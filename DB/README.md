## Morgan SQL DB

Basic database complied of data from historic manuscript archives. 

### Schema

##### Table: Tombs

  All digital tombs found via web scrappers.

Books:
```sql
  tomb_id VARCHAR(255) PRIMARY KEY,
  book_type VARCHAR(255),
  book_location VARCHAR(255),
  book_date YEAR
```

##### Table: Folios

  Pages found in each of the tombs. Foreign key in tomb_id joins folios their tombs.

Folios:
```sql
  folio VARCHAR(255) PRIMARY KEY,
  leaf_num INT,
  tomb_id INT,
  folio_url VARCHAR(255),
  tomb_text TEXT,
  folio_text TEXT,
  FOREIGN KEY (tombId) REFERENCES books(tomb_id),
  INDEX idx_folio (folio),
  INDEX idx_tomb_id (tombId)
```

##### Docker Commands

```shell
docker build -t my_mysql_image .
docker run -d --name my_mysql_container -p 3306:3306 my_mysql_image
```

These commands build a Docker image called my_mysql_image and then run it in a container named my_mysql_container on port 3306.

Please let me know if there's anything else I can help you with!
