import requests
from bs4 import BeautifulSoup

def get_movie_point(start_id, finish_id):
    data = []
    for i in range(start_id, finish_id):
        url = 'https://movie.naver.com/movie/bi/mi/basic.naver?code='+str(i)
        r = requests.get(url)
        bs = BeautifulSoup(r.text, "html.parser")
        print(bs)
"""         trs = bs.select("table.list_netizen > tbody > tr")
        for tr in trs:  #다수의 평점
    
            number = tr.select_one("td.ac.num").text
            writer = tr.select_one("td.num > a.author").text
            tr_data = tr.select_one("td.title")
            title = tr_data.select_one("a").text


            point = tr_data.select_one("div.list_netizen_score > em").text

            # td class="title" 태그에서 a, div, br 태그 제거
            # extract() 함수는 태그와 태그의 내용까지 모두 제거
            [x.extract() for x in tr_data.select("a")]
            [x.extract() for x in tr_data.select("div")]
            [x.extract() for x in tr_data.select("br")]


            content = tr_data.text.strip()
            data.append({
                "number": number,
                "movie": title,
                "point": point,
                "writer": writer,
                "contents": content,
            })
    return data

print(get_movie_point(1,1)) """