var subject_name = ''; // 과정명
var subject_code = ''; // 쿠키 저장할 코드
var chasi_num = '01'; // 차시 번호
var chasi_name = '';
var maxPage = 1; //총 페이지 갯수
var move_value = [1]; /* 인덱스 넘어갈 페이지 번호 */
var con_w = 1000; // 콘텐츠의 기준 가로 사이즈 (scale 조절에 쓰임)
var con_h = 600; // 콘텐츠의 기준 세로 사이즈 (scale 조절에 쓰임)
var con_scale = 1; // 콘텐츠의 scale

var down_file = downDir + '강의노트_' + chasi_num + '.zip'; // 다운로드자료 파일 이름
var page_info = []; // 상단 대제목, 소제목 데이터

var quizList = [
					{
						qText : '문항<strong>1</strong>',
						qSub : '보기 박스',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 1, 
						explain : '해설1',
						refStr : ''
					},
					{
						qText : '문항<strong>2</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 2, 
						explain : '해설2',
						refStr : ''
					},
					{
						qText : '문항<strong>3</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 3, 
						explain : '해설3',
						refStr : ''
					},
					{
						qText : '문항<strong>4</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 1, 
						explain : '해설4',
						refStr : ''
					},
					{
						qText : '문항<strong>5</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 2, 
						explain : '해설5',
						refStr : ''
					},
					{
						qText : '문항<strong>6</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 3, 
						explain : '해설6',
						refStr : ''
					},
					{
						qText : '문항<strong>7</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 1, 
						explain : '해설7',
						refStr : ''
					},
					{
						qText : '문항<strong>8</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 2, 
						explain : '해설8',
						refStr : ''
					},
					{
						qText : '문항<strong>9</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 3, 
						explain : '해설9',
						refStr : ''
					},
					{
						qText : '문항<strong>10</strong>',
						qSub : '',
						select : [ 
							'선택지1',
							'선택지2',
							'선택지3',
							'선택지4'
						],
						answer : 1, 
						explain : '해설10',
						refStr : ''
					}
				];

var soundStr = '';
soundStr += '<audio id="se_correct" preload="auto" src="' + soundDir + 'se_correct.mp3"></audio>'
soundStr += '<audio id="se_wrong" preload="auto" src="' + soundDir + 'se_wrong.mp3"></audio>';
soundStr += '<audio id="se_end" preload="auto" src="' + soundDir + 'se_end.mp3"></audio>';
soundStr += '<audio id="se_click" preload="auto" src="' + soundDir + 'se_click.mp3"></audio>';