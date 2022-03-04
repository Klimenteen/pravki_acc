document.addEventListener('DOMContentLoaded', function () {
	var articles_box = document.querySelector('.categoryofarticles__articles');

	var new_articles_container = document.querySelector('.newarticles__wrapper');

	new_articles_container.innerHTML = '<div class="loader"></div>';
	articles_box.innerHTML = '<div class="loader"></div>';

	setTimeout(() => {
		fetch('data.json')
			.then(function (resp) {
				return resp.json();
			})
			.then(function (data) {
				new_articles_container.innerHTML = `
                    <div class="newarticles__firstarticle"></div>
                    <div class="newarticles__secondarticle-wrapper"></div>
                `;

				var articles = data.channel.item;
				var new_articles_box = document.querySelector('.newarticles__firstarticle');
				var second_article_var = document.querySelector('.newarticles__secondarticle-wrapper');
				articles_box.innerHTML = '';
				articles.forEach((article, i) => {
					fetch('scripts/articles_images.php', { method: 'POST', body: JSON.stringify({ url: article.link }) })
						.then((res) => {
							return res.text();
						})
						.then((html) => {
							const article_original_dom = document.createElement('div');
							article_original_dom.innerHTML = html;
							const article_extracted_image = article_original_dom.querySelector('.attachment-blog-full');
							console.log(article_extracted_image);

							if (i < 1) {
								new_articles_box.innerHTML += `
                                    <div class="newarticles__firstarticle-img">
                                        <img src="${article_extracted_image.dataset.src}" alt="">
                                    </div>
                                    <div class="newarticles__firstarticle-title text-hover">
                                        <a href="${article.link}"> ${articles.title.__cdata} </a>
                                    </div>
                                    <div class="newarticles__firstarticle-info">
                                        <div class="banner__articles-author">
                                            <div class="author__avatar">
                                                <img src="images/pictures/author__avatar.png" alt="">
                                            </div>
                                            <div class="author__name">${article.creator.__cdata}</div>
                                        </div>
                                        <div class="banner__articles-info">
                                            <div class="info__date">${article.post_date.__cdata.split(' ')[0]}</div>
                                            <div class="info__view">
                                                <img src="images/icons/view.svg" alt="">
                                                889
                                            </div>
                                        </div>
                                    </div>
                                `;
							} else if (i < 4) {
								second_article_var.innerHTML += `
                                    <div class="newarticles__secondarticle-item">
                                        <div class="newarticles__secondarticle-item-title text-hover">
                                            <a href="${article.link}"> ${article.title.__cdata} </a>
                                        </div>
                                        <div class="newarticles__secondarticle-item-info">
                                            <div class="banner__articles-author">
                                                <div class="author__avatar">
                                                    <img src="images/pictures/author__avatar.png" alt="">
                                                </div>
                                                <div class="author__name">${article.creator.__cdata}</div>
                                            </div>
                                            <div class="banner__articles-info">
                                                <div class="info__date">${article.post_date.__cdata.split(' ')[0]}</div>
                                                <div class="info__view">
                                                    <img src="images/icons/view.svg" alt="">
                                                    889
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
							}
							if (i <= 6) {
								articles_box.innerHTML += `
                                    <div class="categoryofarticles__articles-item">
                                        <div class="categoryofarticles__articles-item__img">
                                            <img src="${article_extracted_image.dataset.src}" alt="">
                                        </div>
                                        <div class="categoryofarticles__articles-item__title text-hover">
                                            <a href="${article.link}"> ${article.title.__cdata} </a>
                                        </div>
                                        <div class="categoryofarticles__articles-item__info">
                                            <div class="banner__articles-author">
                                                <div class="author__avatar">
                                                    <img src="images/pictures/author__avatar.png" alt="">
                                                </div>
                                                <div class="author__name">${article.creator.__cdata}</div>
                                            </div>
                                            <div class="banner__articles-info">
                                                <div class="info__date">${article.post_date.__cdata.split(' ')[0]} </div>
                                                <div class="info__view">
                                                    <img src="images/icons/view.svg" alt="">
                                                    1056
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
							}
						});
				});

				articles.forEach((article, i) => {});

				articles.forEach((article, i) => {});
			});
	}, 10);
});
