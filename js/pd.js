document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('PDUpdate', function () {
		var pd_links = document.querySelectorAll('a[href="/personal-data-agreement"]');

		for (var i = 0; i < pd_links.length; i++) {
			pd_links[i].addEventListener('click', function (e) {
				e.preventDefault();
				var overlay = document.createElement('div');
				overlay.classList.add('overlay');
				overlay.classList.add('consultation_overlay');
				overlay.style.display = 'block';
				overlay.innerHTML = `
                <div class="popup">
                    <div class="popup_text_block">
                        <h2>Получаемая информация</h2>
                        <p>
                        Мы получаем два вида информации о Вас: это Ваша персональная информация, которую Вы сознательно согласились раскрыть нам, заполняя различные формы запроса расчёта или обратной связи, во-вторых, это техническая информация, автоматически собираемая программным обеспечением Сайта во время его посещения.
                
                        </p>
                        <p>Персональная информация попадает к нам несколькими способами: </p>
                        <p>1.Заполнение формы расчёта услуг и формы обратной связи. Для того, чтобы запросить расчёт или обратную связь и получать от нас письма с соответствующей информацией, Вам необходимо предоставить нам свой адрес электронной почты и Ваше имя. Эта информация предоставляется Вами добровольно и ее достоверность мы никак не проверяем.</p>
                        <p>2.Техническая информация. Во время посещения вами Сайта, администрации Сайта автоматически становится доступной информация из стандартных журналов регистрации сервера (server logs). Сюда входит IP-адрес Вашего компьютера (или прокси-сервера, если он используется для выхода в Интернет), имя Интернет-провайдера, имя домена, тип браузера и операционной системы, информация о сайте, с которого Вы совершили переход на Сайт, страницах Сайта, которые Вы посещаете, дате и времени этих посещений, файлах, которые Вы загружаете.</p>
                    </div>
                    <div class="popup_text_block">
                        <h2>Использование полученной информации</h2>
                        <p>
                        Мы получаем два вида информации о Вас: это Ваша персональная информация, которую Вы сознательно согласились раскрыть нам, заполняя различные формы запроса расчёта или обратной связи, во-вторых, это техническая информация, автоматически собираемая программным обеспечением Сайта во время его посещения.
            
                        </p>
                        <p>Персональная информация попадает к нам несколькими способами: </p>
                        <p>1.Мы используем предоставляемый вами адрес электронный почты для направления Вам заинтересовавшего предложения, которое содержит в себе расчёты стоимости бухгалтерских услуг, пояснения к ним, общую информации по ведению бизнеса в Грузии, информацию о существующих услугах, а так же любую другую информацию, релевантную Вашему изначальному запросу.</p>
                        <p>2.Техническая информация анализируется нами в агрегированном (обезличенном) виде для анализа посещаемости Сайта, и используется при разработке предложений по его улучшению и развитию. Связь между Вашим IP-адресом и Вашей персональной информацией никогда не раскрывается третьим лицам.</p>
                        <p>Мы не используем полученные адреса электронной почты для осуществления рассылок какой-либо информации.</p>
                    </div>
                    <div class="popup_text_block">
                        <h1>Предоставление информации третьим лицам</h1>
                        <p>Мы очень серьезно относимся к защите Вашей частной жизни. Мы никогда не предоставляем Вашу личную информацию третьим лицам, кроме случаев, когда это прямо может требовать законодательство (например, по запросу суда). Вся контактная информация, которую Вы нам предоставляете, раскрывается только с Вашего разрешения. Адреса электронной почты никогда не публикуются на Сайте и используются нами только для связи с Вами.</p>
                    </div>
                    <div class="popup_text_block">
                        <h1>Безопасность данных</h1>
                        <p>Мы не храним полученную от Вас информацию на нашем сайте,  а используем для ее хранения систему amoCRM.  Данная система гарантирует безопасность хранения данных и их защиту от злоумышленников, а с ее политикой безопасности Вы можете ознакомиться здесь: <a href="https://www.amocrm.com/privacy/">https://www.amocrm.com/privacy/</a></p>
                    </div>
                    <div class="popup_text_block">
                        <h1>Заключительные положения</h1>
                        <p>Получаемая нами информация необходима для осуществления коммуникации с посетителями сайта и не используется для каких-либо других целей. Мы с уважением относимся не только к Вашей частной жизни, но и к Вашему времени и личному пространству.</p>
                    </div>
                    <div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
                </div>
        
                `;

				document.body.appendChild(overlay);
				document.body.style.overflowY = 'hidden';
				function killConsultation() {
					overlay.remove();
					document.body.style.overflowY = 'scroll';
				}
				overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
			});
		}
	});
});
