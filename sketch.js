var tela, prosseguir, xu, yu, txu, tyu, xc, yc, txc, tyc, xcr, ycr, xc2, yc2, txc2, tyc2, xc2r, yc2r, xc3, yc3, txc3, tyc3, xc3r, yc3r, contf1, imgbg, imgd, tempo, contf,/*fase2*/ xuf2, ruf2, xof2, yof2, rof2, t, vf2, r,/*fase3*/ xuf3, yuf3, duf3, xa1f3, ya1f3, da1f3, xa2f3, ya2f3, da2f3, xa3f3, ya3f3, da3f3, rxa1f3, rya1f3, rxa2f3, rya2f3, rxa3f3, rya3f3,xo1f3,yo1f3,xo2f3,y2of,xo3f3,y3of,xo4f3,yo4f,xo5f3,yo5f,xo6f3,yo6f,xo7f3,yo7f,xo8f3,yo8f,xo9f3,yo9f,xo10f3,yo10f,xo11f3,yo11f,xo12f3,yo12f,xo13f3,yo13f,xo14f3,yo14f,xo15f3,yo15f,xo16f3,yo16f,xo17f3,yo17f,xo18f3,yo18f,xo19f3,yo19f,xo20f3,yo20f3,xo21f3,yo21f3,xo22f3,y22of,xo23f3,y23of,xo24f3,yo24f,xo25f3,yo25f,xo26f3,yo26f,xo27f3,yo27f,xo28f3,yo28f,xo29f3,yo29f,xo30f3,yo30f,xo31f3,yo31f,xo32f3,yo32f,xo33f3,yo33f,xo34f3,yo34f,xo35f3,yo35f,xo36f3,yo36f,xo37f3,yo37f,xo38f3,yo38f,xo39f3,yo39f,xo40f3,yo40f3;
//fase1
  //dados do personagem
  txu = 20;
  tyu = 20;
  xu = 384;
  yu = 216;
  //dados do cliente
  txc = 20;
  tyc = 20;
  txc2 = 20;
  tyc2 = 20;
  txc3 = 20;
  tyc3 = 20;
  //ferramentas
  contf1 = 0;
//fase2
  //dados do personagem
  xuf2 = 384;
  ruf2 = 90;
  //dados do objeto
    rof2 = 30;
  //ferramentas
  t = 1;
  vf2 = 0;
  r =1;
//fase3
  duf3 = 25;
  da1f3 = 25;
  da2f3 = 25;
  da3f3 = 25;
//utensilios
proseguir = false;
tela = 0;
tempo = 0;
contframe = 0;
//funçoes
function preload() {
  imgbg = loadImage('capital.png');
}
function keyPressed() {
  if(keyCode==ESCAPE){
    tela = 0;
  }
  if(keyCode==ENTER){
    prosseguir = true;
  }
  else{
    prosseguir = false;
  }
}
function menu(){
  tempo = 0;
  contframe = 0;
//Menu
  textSize(60);
  strokeWeight(2)
  stroke(0,0,0);
  fill(255)
  text('Menu', 315, 85);
//Jogar
  stroke(255, 255, 0);
  if(mouseX>=335 && mouseX<=435 && mouseY>=157 && mouseY<=212){
    fill(0);
    rect(335, 157, 100, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Jogar', 345, 195);
//Intruções
  stroke(255, 255, 0);
  if(mouseX>=307 && mouseX<=472 && mouseY>=237 && mouseY<=292){
    fill(0);
    rect(307, 237, 165, 55, 17);
    fill(255, 255, 255);
      if (mouseIsPressed) {
        tela = 2
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Instruções', 317, 275);
//Créditos
  stroke(255, 255, 0);
  if(mouseX>=319 && mouseX<=460 && mouseY>=316 && mouseY<=371){
    fill(0);
    rect(319, 316, 141, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 3
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Créditos', 330, 355); 
}
function instruçoes(){
  tempo = 0;
  contframe = 0;
  textSize(26);
  text("Componente: Hitória.\nNível de ensino: 9º Ano.\nObjetivo: Este jogo tem como objetivo principal ajudar na apredi-\nzagem do conteúdo relacionado ao capitalismo; suas dinâmicas,\nconflitos e crises.", 13, 40);
}
function creditos(){
  tempo = 0;
  contframe = 0;
//Desenvolvedor
  textSize(48);
  text('Desenvolvedor:', 222, 80);
  textSize(32);
  text("José Victor Brenner de Paiva", 179, 125);
  textSize(48);
//Educador
  text('Educador:', 276, 270);
  textSize(32);
  text("? ? ? ? ? ? ? ? ? ? ? ?", 227, 315);
}
function jogar(){
  tempo = 0;
  contframe = 0;
//texto de introdução
  textSize(20);
  fill(255);
  text('  A proposta desse jogo é explicar o capitalismo, suas dinâmicas, crises e o seu sur-\ngimento. Pretendo abordar esse tema e seus desdobramentos ao longo de 5 marcos\nque serão as fases. Cada fase com seu objetivo e contexto histórico próprio.', 12, 30);
  //proseguir
  text('Aperte "ENTER" para proseguir.', 260, 410);
  if(prosseguir==true){
    tela = 1.1;
  }
}
function fases(){
  tempo = 0;
  contframe = 0;
  fill(255);
//texto inicial
  textSize(30);
  strokeWeight(2);
  stroke(0,0,0);
  text('Escolha a fase que deseja jogar.', 166, 40);
//fase 1
  if(mouseX>=17 && mouseX<=162 && mouseY>=98 && mouseY<=153){
    stroke(255, 255, 0);
    fill(0);
    rect(17, 98, 145, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
      tela = 1.11
    }
  }
  textSize(40);
  strokeWeight(2);
  stroke(0,0,0);
  text('Fase 1', 30, 140);
//fase 2
  if(mouseX>=17 && mouseX<=163 && mouseY>=178 && mouseY<=233){
    stroke(255, 255, 0);
    fill(0);
    rect(17, 178, 146, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
      tela = 1.121
    }
  }
  textSize(40);
  strokeWeight(2);
  stroke(0,0,0);
  text('Fase 2', 30, 220);
//fase 3
  if(mouseX>=17 && mouseX<=163 && mouseY>=258 && mouseY<=313){
    stroke(255, 255, 0);
    fill(0);
    rect(17, 258, 146, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
      tela = 1.131
    }
  }
    textSize(40);
    strokeWeight(2);
    stroke(0,0,0);
    text('Fase 3', 30, 300);
}
function fase1a(){
  tempo = 0;
  contframe = 0;
//texto de introdução
  textSize(20);
  fill(255);
  text('O surgimento do capitalismo ocorreu na baixa idade média, com a formação de pe-\nquenas cidades comerciais. Essas cidades desafiavam a ordem vigente na epoca,\no feudalismo. O principal objetivo desse sistema é a obtenção de lucro, que nessa\népoca era obtida através do comércio. Nessa fase você será um comerciante e irá\natrás de clientes para vender seu produto e obter lucro.', 20, 30);
//proseguir
  text('Aperte "ENTER" para proseguir.', 260, 410);
  if(prosseguir==true){
    tela = 1.111;
  }
}
function fase1b(){
//seu personagem
  fill(255, 255, 255);
  strokeWeight(1)
  ellipse(xu, yu, txu, tyu);
  if(keyIsDown(UP_ARROW)){
    yu = yu-1;
  }
  if(keyIsDown(DOWN_ARROW)){
    yu = yu+1;
  }
  if(keyIsDown(LEFT_ARROW)){
    xu = xu-1;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xu = xu+1;
  }
  if(xu>758){
    xu = 758;
  }
  if(xu<10){
    xu = 10;
  }
  if(yu<10){
    yu = 10;
  }
  if(yu>422){
    yu = 422;
  }
//tempo
  contframe = contframe+1;
  tempo = parseInt(contframe/60);
  text("Tempo: "+(80-tempo)+" seg", 658, 15);
  if(contframe%220==0){
        xcr = random(0, 9);
        ycr = random(0, 9);
  }
  if(contframe%300==0){
        xc2r = random(0, 9);
        yc2r = random(0, 9);
  }
  if(contframe%180==0){
        xc3r = random(0, 9);
        yc3r = random(0, 9);
  }
//clientes
  //cliente1
  if(xc>758){
      xc = 758;
    }
    if(xc<10){
      xc = 10;
    }
    if(yc<10){
      yc = 10;
    }
    if(yc>422){
      yc = 422;
    }
  //movimento no x
    if(xcr>5){
      xc = xc+1/3;  
    }
    if(xcr<=5 && xcr>1){
      xc = xc-1/3;
    }
    if(xcr<=1){
      xc = xc
    }
  //movimento no y
    if(ycr>5){
      yc = yc+1/3;  
    }
    if(yc2r<=5 && yc2r>1){
      yc = yc-1/3;
    }
    if(ycr<=1){
      yc = yc
    }
    fill(0, 255, 0);
    stroke(0, 0, 0);
    ellipse(xc, yc, txc, tyc);
  //cliente2
    if(xc2>758){
      xc2 = 758;
    }
    if(xc2<10){
      xc2 = 10;
    }
    if(yc2<10){
      yc2 = 10;
    }
    if(yc2>422){
      yc2 = 422;
    }
  //movimento no x
    if(xc2r>5){
      xc2 = xc2+1/2;  
    }
    if(xc2r<=5 && xc2r>1){
      xc2 = xc2-1/2;
    }
    if(xc2r<=1){
      xc2 = xc2
    }
  //movimento no y
    if(yc2r>5){
      yc2 = yc2+1/2;  
    }
    if(yc2r<=5 && yc2r>1){
      yc2 = yc2-1/2;
    }
    if(yc2r<=1){
      yc2 = yc2
    }
    fill(0, 0, 255);
    stroke(0, 0, 0);
    ellipse(xc2, yc2, txc2, tyc2);
  
  //cliente3
    if(xc3>758){
      xc3 = 758;
    }
    if(xc3<10){
      xc3 = 10;
    }
    if(yc3<10){
      yc3 = 10;
    }
    if(yc3>422){
      yc3 = 422;
    }
  //movimento no x
    if(xc3r>5){
      xc3 = xc3+1;  
    }
    if(xc3r<=5 && xc3r>1){
      xc3 = xc3-1;
    }
    if(xc3r<=1){
      xc3 = xc3
    }
  //movimento no y
    if(yc3r>5){
      yc3 = yc3+1;  
    }
    if(yc3r<=5 && yc3r>1){
      yc3 = yc3-1;
    }
    if(yc3r<=1){
      yc3 = yc3
    }
    fill(255, 255, 0);
    stroke(0, 0, 0);
    ellipse(xc3, yc3, txc3, tyc3);
//mecanica da fase
  if(dist(xu, yu, xc, yc) <= 20){
    xc = random(10,758);
    yc = random(10,422);
    contf1 = contf1+10;
  }
  if(dist(xu, yu, xc2, yc2) <= 20){
    xc2 = random(10,758);
    yc2 = random(10,422);
    contf1 = contf1+15;
  }
  if(dist(xu, yu, xc3, yc3) <= 20){
    xc3 = random(10,758);
    yc3 = random(10,422);
    contf1 = contf1+30;
  }
  textSize(15);
  fill(255, 255, 2);
  text('Moedas:'+contf1,5,15);
  if(tempo==80){
    if(contf1>=350){
      tela = 1.112;
      contf1 = 0;
    }
    else{
      tela = 1.113;
      contf1=0;
    }
  }
}
function fase1c(){
  tempo = 0;
  contframe = 0;
  textSize(25);
  strokeWeight(2);
  stroke(0,0,0);
  fill(255);
  text('Muito bem, você concluiu o seu objetivo e conseguiu acumular o \ncapital necessário. Com o passar dos anos, com o avanço tecnoló-\ngico e graças a revolução industrial, o capitalismo chegou na sua \nsegunda fase, a fase industrial. Nessa fase você se encontra como \num trabalhador e tera que pegar o dinheiro que cairá sobre você. \nBoa sorte.', 20, 30);
  //prosseguir
  stroke(255, 255, 0);
  if(mouseX>=135 && mouseX<=310 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(135, 310, 175, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.121
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Prosseguir', 145, 345);
  //retornar
  stroke(255, 255, 0);
  if(mouseX>=435 && mouseX<=580 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(435, 310, 145, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.1
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Fases', 445, 345);
}
function fase1d(){
  tempo = 0;
  contframe = 0;
  textSize(25);
  strokeWeight(2);
  stroke(0,0,0);
  fill(255);
  text('Que pena, você não atingiu seu objetivo. Você deve juntar 350 \nmoedas para passar de para a proxima fase do captalismo. Você \npode recomeçar ou voltar ao menu.', 20, 30);
  //prosseguir
  stroke(255, 255, 0);
  if(mouseX>=135 && mouseX<=340 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(135, 310, 205, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.111
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Recomessar', 145, 345);
  //retornar
  stroke(255, 255, 0);
  if(mouseX>=435 && mouseX<=535 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(435, 310, 100, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 0
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Menu', 445, 345);
}
function fase2a(){
  tempo = 0;
  contframe = 0;
  textSize(30);
  fill(255);
  text('Nessa fase vamos abordar o segunda fase do capitalis-\nmo, a fase industrial. Após a modernização das tecnolo-\ngias e a revolução industrial que occoreu na Inglaterra o \ncapitalismo chegou na fase industrial. Nessa nível você \nserá um trabanlhador e terá que pegar todo o dinheiro \nque cairá sobre você. \nBoa sorte.', 20, 30);
  //proseguir
  text('Aperte "ENTER" para proseguir.', 205, 410);
  if(prosseguir==true){
    tela = 1.111;
  }
}
function fase2b(){
  //usuário
  fill(0, 0, 255)
  strokeWeight(1)
  stroke(0, 0, 0)
  circle(xuf2, 432, ruf2);
  if(keyIsDown(LEFT_ARROW)){
    xuf2 = xuf2-t*1.695;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xuf2 = xuf2+t*1.695;
  }
  if(xuf2>723){
    xuf2 = 723;
  }
  if(xuf2<45){
    xuf2 = 45;
  }
  //objeto
  fill(255, 255, 0)
  circle(xof2, yof2, rof2)
  yof2 = yof2+t;
  xof2 = xof2+vf2;
  if(xof2>=753){
    vf2 = -1.695*t;
  }
  if(xof2<=15){
    vf2 = 1.695*t;
  }
  //tempo
  contframe = contframe+1;
  tempo = parseInt(contframe/60);
  textSize(15)
  text("Tempo: "+(120-tempo)+" seg", 658, 15);
  //mecânica
  if(tempo<10){
    t = 1;
  }
  if(tempo>10 && tempo<20){
    t = 1.5;
  }
  if(tempo>=20 && tempo<30){
    t = 2;
  }
  if(tempo>=30 && tempo<40){
    t = 2.5;
  }
  if(tempo>=40 && tempo<50){
    t = 3;
  }
  if(tempo>=50 && tempo<60){
    t = 3.5;
  }
  if(tempo>=60 && tempo<70){
    t = 4;
  }
  if(tempo>=70 && tempo<80){
    t = 4.5;
  }
  if(tempo>=80){
    t = 5;
  }
  if(dist(xuf2, 432, xof2, yof2)<=(ruf2/2+rof2/2)){
    xof2 = random(15,753);
    yof2 = -15;
    if(t>=2){
      vf2 = 1.695*t*r
      r = int(random(0,1000))%2;
      if(r==0){
        r=-1;
      }
    }
  }
  if(yof2>=447){
    yof2 = -15;
    xof2 = random(15,753);
    tempo = 0;
    contframe = 0;
    tela = 1.123;
    
  }
  if(tempo>=120){
    yof2 = -15;
    xof2 = random(15,753);
    tempo = 0;
    contframe = 0;
    tela = 1.122;
  } 
}
function fase2c(){
    tempo = 0;
    contframe = 0;
    textSize(25);
    fill(255);
    strokeWeight(2);
    stroke(0,0,0);
    stroke(0,0,0)
    text('Muito bem, você conseguiu passar pela fase industrial do capitalis-\nmo sem perder nenhuma oportunidade de gerar capital. Agora com \no capitalismo bem estabelecido há uma participação de bancos e \ncriação de multinacionais, dessa forma criou-se uma grande com-\npetição em cada setor e uma perspectiva de crescimento dessas \nmultinacionais. Chegando assim o Capilismo Financeiro. Nessa \nfase você será uma multinacional, seu objetivo é constituir e imple-\nmentar sua dominancia no mercado. \nBoa sorte.', 20, 30);
    //prosseguir
  stroke(255, 255, 0);
  if(mouseX>=135 && mouseX<=310 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(135, 310, 175, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.131
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Prosseguir', 145, 345);
  //retornar
  stroke(255, 255, 0);
  if(mouseX>=435 && mouseX<=580 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(435, 310, 145, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.1
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Fases', 445, 345);
}
function fase2d(){
  tempo = 0;
  contframe = 0;
  textSize(25);
  fill(255);
  stroke(0,0,0)
  text('Que pena, nessa fase você não pode perder nenhuma oportunida-\nde. Consiga todas as moedas até que o tempo acabe e então pros-\nsiga para a proxima fase do capitalismo.', 20, 30);
  //prosseguir
  stroke(255, 255, 0);
  if(mouseX>=135 && mouseX<=340 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(135, 310, 205, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.121
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Recomessar', 145, 345);
  //retornar
  stroke(255, 255, 0);
  if(mouseX>=435 && mouseX<=535 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(435, 310, 100, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 0
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Menu', 445, 345);
}
function fase3a(){
  tempo = 0;
  contframe = 0;
  textSize(30);
  fill(255);
  stroke(0,0,0)
  text('Em meados do Sec. XX surge uma nova fase do capita-\nlismo, com a participação dos bancos e especulação fi-\nnanceira. Houve também a criação de multinacionais e \nmuita competição para liderar o mercado. Nessa nível \nvocê representará uma multinacional e terá que "engo-\nlir" a concorrência. \nBoa sorte.', 20, 30);
  //proseguir
  text('Aperte "ENTER" para proseguir.', 205, 410);
  if(prosseguir==true){
    tela = 1.111;
  }
}
function fase3b(){
  //tempo
  contframe = contframe+1;
  tempo = parseInt(contframe/60);
  textSize(15);
  fill(255,255,255)
  text("Tempo: "+(120-tempo)+" seg", 658, 15)
  //usuário
  fill(255,0,0);
  strokeWeight(1)
  stroke(0,0,0);
  circle(xuf3,yuf3,duf3);
    //movimentação
    if(xuf3!=-100 && yuf3!=-100){
      if(keyIsDown(UP_ARROW)){
      yuf3 = yuf3-1;
      }
      if(keyIsDown(DOWN_ARROW)){
        yuf3 = yuf3+1;
      }
      if(keyIsDown(LEFT_ARROW)){
        xuf3 = xuf3-1;
      }
      if(keyIsDown(RIGHT_ARROW)){
        xuf3 = xuf3+1;
      }
      if(xuf3>(768-duf3/2)){
        xuf3 = 768-duf3/2;
      }
      if(xuf3<(duf3/2)){
        xuf3 = duf3/2;
      }
      if(yuf3<(duf3/2)){
        yuf3 = duf3/2;
      }
      if(yuf3>(432-duf3/2)){
        yuf3 = 432-duf3/2;
      }
    }
  //adversario1
  fill(0,255,0);
  stroke(0,0,0);
  circle(xa1f3,ya1f3,da1f3);
    //movimentação
    if(contframe%300==0 || contframe == 5){
      rxa1f3 = int(random(0,1000))%3;
    }
    if(contframe%300==0 || contframe == 5){
      rya1f3 = int(random(0,1000))%3;
    }
    while(rxa1f3==2 && rya1f3==2){
      rya1f3 = int(random(0,1000))%3;
      rya1f3 = int(random(0,1000))%3;
    }
    if(xa1f3!=-200 && ya1f3!=-200){
      if(rxa1f3==0){
        xa1f3 = xa1f3+1;
      }
      if(rxa1f3==1){
        xa1f3 = xa1f3-1;
      }
      if(rya1f3==0){
        ya1f3 = ya1f3+1;
      }
      if(rya1f3==1){
        ya1f3 = ya1f3-1;
      }
      if(xa1f3>(768-da1f3/2)){
        xa1f3 = 768-da1f3/2;
      }
      if(xa1f3<da1f3/2){
        xa1f3 = da1f3/2;
      }
      if(ya1f3<da1f3/2){
        ya1f3 = da1f3/2;
      }
      if(ya1f3>(432-da1f3/2)){
        ya1f3 = 432-da1f3/2;
      }
    }
  //adversario2
  fill(0,0,255);
  stroke(0,0,0);
  circle(xa2f3,ya2f3,da2f3);
    //movimentação
      if(contframe%300==0 || contframe == 5){
        rxa2f3 = int(random(0,1000))%3;
      }
      if(contframe%300==0 || contframe == 5){
        rya2f3 = int(random(0,1000))%3;
      }
      while(rxa2f3==2 && rya2f3==2){
        rya2f3 = int(random(0,1000))%3;
        rya2f3 = int(random(0,1000))%3;
      }
      if(xa2f3!=-300 && ya2f3!=-300){
        if(rxa2f3==0){
          xa2f3 = xa2f3+1;
        }
        if(rxa2f3==1){
          xa2f3 = xa2f3-1;
        }
        if(rya2f3==0){
          ya2f3 = ya2f3+1;
        }
        if(rya1f3==1){
          ya2f3 = ya2f3-1;
        }
        if(xa2f3>(768-da2f3/2)){
          xa2f3 = 768-da2f3/2;
        }
        if(xa2f3<da2f3/2){
          xa2f3 = da2f3/2;
        }
        if(ya2f3<da2f3/2){
          ya2f3 = da2f3/2;
        }
        if(ya2f3>(432-da2f3/2)){
          ya2f3 = 432-da2f3/2;
        }
      }
  //adversário3
  fill(255,140,0);
  stroke(0,0,0);
  circle(xa3f3,ya3f3,da3f3);
    //movimentação
    if(contframe%300==0 || contframe == 5){
      rxa3f3 = int(random(0,1000))%3;
    }
    if(contframe%300==0 || contframe == 5){
      rya3f3 = int(random(0,1000))%3;
    }
    while(rxa3f3==2 && rya3f3==2){
      rya3f3 = int(random(0,1000))%3;
      rya3f3 = int(random(0,1000))%3;
    }
    if(xa3f3!=-400 && ya3f3!=-400){
      if(rxa3f3==0){
        xa3f3 = xa3f3+1;
      }
      if(rxa3f3==1){
        xa3f3 = xa3f3-1;
      }
      if(rya3f3==0){
        ya3f3 = ya3f3+1;
      }
      if(rya3f3==1){
        ya3f3 = ya3f3-1;
      }
      if(xa3f3>(768-da3f3/2)){
        xa3f3 = 768-da3f3/2;
      }
      if(xa3f3<da3f3/2){
        xa3f3 = da3f3/2;
      }
      if(ya3f3<da3f3/2){
        ya3f3 = da3f3/2;
      }
      if(ya3f3>(432-da3f3/2)){
        ya3f3 = 432-da3f3/2;
      }
    }
  //mecanica
  //objetos
    //nos 2 seg
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo1f3,yo1f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo2f3,yo2f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo3f3,yo3f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo4f3,yo4f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo5f3,yo5f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo6f3,yo6f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo7f3,yo7f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo8f3,yo8f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo9f3,yo9f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo10f3,yo10f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo11f3,yo11f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo12f3,yo12f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo13f3,yo13f3,15)
      }
      if(contframe>=120){
        fill(255,255,0);
        stroke(0,0,0);
        circle(xo14f3,yo14f3,15)
      }
      //colisão do usuario
      if(dist(xuf3,yuf3,xo1f3,yo1f3)<=(7.5+duf3/2)){
        xo1f3 = -15;
        yo1f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo2f3,yo2f3)<=(7.5+duf3/2)){
        xo2f3 = -15;
        yo2f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo3f3,yo3f3)<=(7.5+duf3/2)){
        xo3f3 = -15;
        yo3f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo4f3,yo4f3)<=(7.5+duf3/2)){
        xo4f3 = -15;
        yo4f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo5f3,yo5f3)<=(7.5+duf3/2)){
        xo5f3 = -15;
        yo5f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo6f3,yo6f3)<=(7.5+duf3/2)){
        xo6f3 = -15;
        yo6f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo7f3,yo7f3)<=(7.5+duf3/2)){
        xo7f3 = -15;
        yo7f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo8f3,yo8f3)<=(7.5+duf3/2)){
        xo8f3 = -15;
        yo8f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo9f3,yo9f3)<=(7.5+duf3/2)){
        xo9f3 = -15;
        yo9f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo10f3,yo10f3)<=(7.5+duf3/2)){
        xo10f3 = -15;
        yo10f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo11f3,yo11f3)<=(7.5+duf3/2)){
        xo11f3 = -15;
        yo11f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo12f3,yo12f3)<=(7.5+duf3/2)){
        xo12f3 = -15;
        yo12f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo13f3,yo13f3)<=(7.5+duf3/2)){
        xo13f3 = -15;
        yo13f3 = -15;
        duf3 = duf3+2
      }
      if(dist(xuf3,yuf3,xo14f3,yo14f3)<=(7.5+duf3/2)){
        xo14f3 = -15;
        yo14f3 = -15;
        duf3 = duf3+2
      }
    //colisão do adversario1
      if(dist(xa1f3,ya1f3,xo1f3,yo1f3)<=(7.5+da1f3/2)){
        xo1f3 = -15;
        yo1f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo2f3,yo2f3)<=(7.5+da1f3/2)){
        xo2f3 = -15;
        yo2f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo3f3,yo3f3)<=(7.5+da1f3/2)){
        xo3f3 = -15;
        yo3f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo4f3,yo4f3)<=(7.5+da1f3/2)){
        xo4f3 = -15;
        yo4f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo5f3,yo5f3)<=(7.5+da1f3/2)){
        xo5f3 = -15;
        yo5f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo6f3,yo6f3)<=(7.5+da1f3/2)){
        xo6f3 = -15;
        yo6f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo7f3,yo7f3)<=(7.5+da1f3/2)){
        xo7f3 = -15;
        yo7f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo8f3,yo8f3)<=(7.5+da1f3/2)){
        xo8f3 = -15;
        yo8f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo9f3,yo9f3)<=(7.5+da1f3/2)){
        xo9f3 = -15;
        yo9f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo10f3,yo10f3)<=(7.5+da1f3/2)){
        xo10f3 = -15;
        yo10f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo11f3,yo11f3)<=(7.5+da1f3/2)){
        xo11f3 = -15;
        yo11f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo12f3,yo12f3)<=(7.5+da1f3/2)){
        xo12f3 = -15;
        yo12f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo13f3,yo13f3)<=(7.5+da1f3/2)){
        xo13f3 = -15;
        yo13f3 = -15;
        da1f3 = da1f3+2;
      }
      if(dist(xa1f3,ya1f3,xo14f3,yo14f3)<=(7.5+da1f3/2)){
        xo14f3 = -15;
        yo14f3 = -15;
        da1f3 = da1f3+2;
      }
    //colisão do adversario2
      if(dist(xa2f3,ya2f3,xo1f3,yo1f3)<=(7.5+da2f3/2)){
        xo1f3 = -15;
        yo1f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo2f3,yo2f3)<=(7.5+da2f3/2)){
        xo2f3 = -15;
        yo2f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo3f3,yo3f3)<=(7.5+da2f3/2)){
        xo3f3 = -15;
        yo3f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo4f3,yo4f3)<=(7.5+da2f3/2)){
        xo4f3 = -15;
        yo4f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo5f3,yo5f3)<=(7.5+da2f3/2)){
        xo5f3 = -15;
        yo5f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo6f3,yo6f3)<=(7.5+da2f3/2)){
        xo6f3 = -15;
        yo6f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo7f3,yo7f3)<=(7.5+da2f3/2)){
        xo7f3 = -15;
        yo7f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo8f3,yo8f3)<=(7.5+da2f3/2)){
        xo8f3 = -15;
        yo8f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo9f3,yo9f3)<=(7.5+da2f3/2)){
        xo9f3 = -15;
        yo9f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo10f3,yo10f3)<=(7.5+da2f3/2)){
        xo10f3 = -15;
        yo10f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo11f3,yo11f3)<=(7.5+da2f3/2)){
        xo11f3 = -15;
        yo11f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo12f3,yo12f3)<=(7.5+da2f3/2)){
        xo12f3 = -15;
        yo12f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo13f3,yo13f3)<=(7.5+da2f3/2)){
        xo13f3 = -15;
        yo13f3 = -15;
        da2f3 = da2f3+2;
      }
      if(dist(xa2f3,ya2f3,xo14f3,yo14f3)<=(7.5+da2f3/2)){
        xo14f3 = -15;
        yo14f3 = -15;
        da2f3 = da2f3+2;
      }
    //colisão do adversario3
      if(dist(xa3f3,ya3f3,xo1f3,yo1f3)<=(7.5+da3f3/2)){
        xo1f3 = -15;
        yo1f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo2f3,yo2f3)<=(7.5+da3f3/2)){
        xo2f3 = -15;
        yo2f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo3f3,yo3f3)<=(7.5+da3f3/2)){
        xo3f3 = -15;
        yo3f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo4f3,yo4f3)<=(7.5+da3f3/2)){
        xo4f3 = -15;
        yo4f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo5f3,yo5f3)<=(7.5+da3f3/2)){
        xo5f3 = -15;
        yo5f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo6f3,yo6f3)<=(7.5+da3f3/2)){
        xo6f3 = -15;
        yo6f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo7f3,yo7f3)<=(7.5+da3f3/2)){
        xo7f3 = -15;
        yo7f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo8f3,yo8f3)<=(7.5+da3f3/2)){
        xo8f3 = -15;
        yo8f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo9f3,yo9f3)<=(7.5+da3f3/2)){
        xo9f3 = -15;
        yo9f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo10f3,yo10f3)<=(7.5+da3f3/2)){
        xo10f3 = -15;
        yo10f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo11f3,yo11f3)<=(7.5+da3f3/2)){
        xo11f3 = -15;
        yo11f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo12f3,yo12f3)<=(7.5+da3f3/2)){
        xo12f3 = -15;
        yo12f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo13f3,yo13f3)<=(7.5+da3f3/2)){
        xo13f3 = -15;
        yo13f3 = -15;
        da3f3 = da3f3+2;
      }
      if(dist(xa3f3,ya3f3,xo14f3,yo14f3)<=(7.5+da3f3/2)){
        xo14f3 = -15;
        yo14f3 = -15;
        da3f3 = da3f3+2;
      }
   //nos 15 seg
      if(contframe>=900){
        fill(0,255,255);
        stroke(0,0,0);
        circle(xo15f3,yo15f3,15)
      }
      if(contframe>=900){
        fill(0,255,255);
        stroke(0,0,0);
        circle(xo16f3,yo16f3,15)
      }
      if(contframe>=900){
        fill(0,255,255);
        stroke(0,0,0);
        circle(xo17f3,yo17f3,15)
      }
      if(contframe>=900){
        fill(0,255,255);
        stroke(0,0,0);
        circle(xo18f3,yo18f3,15)
      }
      if(contframe>=900){
        fill(0,255,255);
        stroke(0,0,0);
        circle(xo19f3,yo19f3,15)
      }
      if(contframe>=900){
        fill(0,255,255);
        stroke(0,0,0);
        circle(xo20f3,yo20f3,15)
      }
    //colisão do usuário
      if(dist(xuf3,yuf3,xo15f3,yo15f3)<=(7.5+duf3/2)){
        xo15f3 = -15;
        yo15f3 = -15;
        duf3 = duf3+3;
      }
      if(dist(xuf3,yuf3,xo16f3,yo16f3)<=(7.5+duf3/2)){
        xo16f3 = -15;
        yo16f3 = -15;
        duf3 = duf3+3;
      }
      if(dist(xuf3,yuf3,xo17f3,yo17f3)<=(7.5+duf3/2)){
        xo17f3 = -15;
        yo17f3 = -15;
        duf3 = duf3+3;
      }
      if(dist(xuf3,yuf3,xo18f3,yo18f3)<=(7.5+duf3/2)){
        xo18f3 = -15;
        yo18f3 = -15;
        duf3 = duf3+3;
      }
      if(dist(xuf3,yuf3,xo19f3,yo19f3)<=(7.5+duf3/2)){
        xo19f3 = -15;
        yo19f3 = -15;
        duf3 = duf3+3;
      }
      if(dist(xuf3,yuf3,xo20f3,yo20f3)<=(7.5+duf3/2)){
        xo20f3 = -15;
        yo20f3 = -15;
        duf3 = duf3+3;
      }
    //colisão adversario1
      if(dist(xa1f3,ya1f3,xo15f3,yo15f3)<=(7.5+da1f3/2)){
        xo15f3 = -15;
        yo15f3 = -15;
        da1f3 = da1f3+3;
      }
      if(dist(xa1f3,ya1f3,xo16f3,yo16f3)<=(7.5+da1f3/2)){
        xo16f3 = -15;
        yo16f3 = -15;
        da1f3 = da1f3+3;
      }
      if(dist(xa1f3,ya1f3,xo17f3,yo17f3)<=(7.5+da1f3/2)){
        xo17f3 = -15;
        yo17f3 = -15;
        da1f3 = da1f3+3;
      }
      if(dist(xa1f3,ya1f3,xo18f3,yo18f3)<=(7.5+da1f3/2)){
        xo18f3 = -15;
        yo18f3 = -15;
        da1f3 = da1f3+3;
      }
      if(dist(xa1f3,ya1f3,xo19f3,yo19f3)<=(7.5+da1f3/2)){
        xo19f3 = -15;
        yo19f3 = -15;
        da1f3 = da1f3+3;
      }
      if(dist(xa1f3,ya1f3,xo20f3,yo20f3)<=(7.5+da1f3/2)){
        xo20f3 = -15;
        yo20f3 = -15;
        da1f3 = da1f3+3;
      }
    //colisão do adversario2
      if(dist(xa2f3,ya2f3,xo15f3,yo15f3)<=(7.5+da2f3/2)){
        xo15f3 = -15;
        yo15f3 = -15;
        da2f3 = da2f3+3;
      }
      if(dist(xa2f3,ya2f3,xo16f3,yo16f3)<=(7.5+da2f3/2)){
        xo16f3 = -15;
        yo16f3 = -15;
        da2f3 = da2f3+3;
      }
      if(dist(xa2f3,ya2f3,xo17f3,yo17f3)<=(7.5+da2f3/2)){
        xo17f3 = -15;
        yo17f3 = -15;
        da2f3 = da2f3+3;
      }
      if(dist(xa2f3,ya2f3,xo18f3,yo18f3)<=(7.5+da2f3/2)){
        xo18f3 = -15;
        yo18f3 = -15;
        da2f3 = da2f3+3;
      }
      if(dist(xa2f3,ya2f3,xo19f3,yo19f3)<=(7.5+da2f3/2)){
        xo19f3 = -15;
        yo19f3 = -15;
        da2f3 = da2f3+3;
      }
      if(dist(xa2f3,ya2f3,xo20f3,yo20f3)<=(7.5+da2f3/2)){
        xo20f3 = -15;
        yo20f3 = -15;
        da2f3 = da2f3+3;
      }
    //colisão do adversario3
      if(dist(xa3f3,ya3f3,xo15f3,yo15f3)<=(7.5+da3f3/2)){
        xo15f3 = -15;
        yo15f3 = -15;
        da3f3 = da3f3+3;
      }
      if(dist(xa3f3,ya3f3,xo16f3,yo16f3)<=(7.5+da3f3/2)){
        xo16f3 = -15;
        yo16f3 = -15;
        da3f3 = da3f3+3;
      }
      if(dist(xa3f3,ya3f3,xo17f3,yo17f3)<=(7.5+da3f3/2)){
        xo17f3 = -15;
        yo17f3 = -15;
        da3f3 = da3f3+3;
      }
      if(dist(xa3f3,ya3f3,xo18f3,yo18f3)<=(7.5+da3f3/2)){
        xo18f3 = -15;
        yo18f3 = -15;
        da3f3 = da3f3+3;
      }
      if(dist(xa3f3,ya3f3,xo19f3,yo19f3)<=(7.5+da3f3/2)){
        xo19f3 = -15;
        yo19f3 = -15;
        da3f3 = da3f3+3;
      }
      if(dist(xa3f3,ya3f3,xo20f3,yo20f3)<=(7.5+da3f3/2)){
        xo20f3 = -15;
        yo20f3 = -15;
        da3f3 = da3f3+3;
      }
      //25 seg
      if(contframe>=1500){
        fill(255,120,120);
        stroke(0,0,0);
        circle(xo21f3,yo21f3,15)
      }
      if(contframe>=1500){
        fill(255,120,120);
        stroke(0,0,0);
        circle(xo22f3,yo22f3,15)
      }
      if(contframe>=1500){
        fill(255,120,120);
        stroke(0,0,0);
        circle(xo23f3,yo23f3,15)
      }
      if(contframe>=1500){
        fill(255,120,120);
        stroke(0,0,0);
        circle(xo24f3,yo24f3,15)
      }
      if(contframe>=1500){
        fill(255,120,120);
        stroke(0,0,0);
        circle(xo25f3,yo25f3,15)
      }
      if(contframe>=1500){
        fill(255,120,120);
        stroke(0,0,0);
        circle(xo26f3,yo26f3,15)
      }
    //conlisão do usuário
      if(dist(xuf3,yuf3,xo21f3,yo21f3)<=(7.5+duf3/2)){
        xo21f3 = -15;
        yo21f3 = -15;
        duf3 = duf3+4;
      }
      if(dist(xuf3,yuf3,xo22f3,yo22f3)<=(7.5+duf3/2)){
        xo22f3 = -15;
        yo22f3 = -15;
        duf3 = duf3+4;
      }
      if(dist(xuf3,yuf3,xo23f3,yo23f3)<=(7.5+duf3/2)){
        xo23f3 = -15;
        yo23f3 = -15;
        duf3 = duf3+4;
      }
      if(dist(xuf3,yuf3,xo24f3,yo24f3)<=(7.5+duf3/2)){
        xo24f3 = -15;
        yo24f3 = -15;
        duf3 = duf3+4;
      }
      if(dist(xuf3,yuf3,xo25f3,yo25f3)<=(7.5+duf3/2)){
        xo25f3 = -15;
        yo25f3 = -15;
        duf3 = duf3+4;
      }
      if(dist(xuf3,yuf3,xo26f3,yo26f3)<=(7.5+duf3/2)){
        xo26f3 = -15;
        yo26f3 = -15;
        duf3 = duf3+4;
      }
    //colisão do adversario1
      if(dist(xa1f3,ya1f3,xo21f3,yo21f3)<=(7.5+da1f3/2)){
        xo21f3 = -15;
        yo21f3 = -15;
        da1f3 = da1f3+4;
      }
      if(dist(xa1f3,ya1f3,xo22f3,yo22f3)<=(7.5+da1f3/2)){
        xo22f3 = -15;
        yo22f3 = -15;
        da1f3 = da1f3+4;
      }
      if(dist(xa1f3,ya1f3,xo23f3,yo23f3)<=(7.5+da1f3/2)){
        xo23f3 = -15;
        yo23f3 = -15;
        da1f3 = da1f3+4;
      }
      if(dist(xa1f3,ya1f3,xo24f3,yo24f3)<=(7.5+da1f3/2)){
        xo24f3 = -15;
        yo24f3 = -15;
        da1f3 = da1f3+4;
      }
      if(dist(xa1f3,ya1f3,xo25f3,yo25f3)<=(7.5+da1f3/2)){
        xo25f3 = -15;
        yo25f3 = -15;
        da1f3 = da1f3+4;
      }
      if(dist(xa1f3,ya1f3,xo26f3,yo26f3)<=(7.5+da1f3/2)){
        xo26f3 = -15;
        yo26f3 = -15;
        da1f3 = da1f3+4;
      }
    //colisão do adversario2
      if(dist(xa2f3,ya2f3,xo21f3,yo21f3)<=(7.5+da2f3/2)){
        xo21f3 = -15;
        yo21f3 = -15;
        da2f3 = da2f3+4;
      }
      if(dist(xa2f3,ya2f3,xo22f3,yo22f3)<=(7.5+da2f3/2)){
        xo22f3 = -15;
        yo22f3 = -15;
        da2f3 = da2f3+4;
      }
      if(dist(xa2f3,ya2f3,xo23f3,yo23f3)<=(7.5+da2f3/2)){
        xo23f3 = -15;
        yo23f3 = -15;
        da2f3 = da2f3+4;
      }
      if(dist(xa2f3,ya2f3,xo24f3,yo24f3)<=(7.5+da2f3/2)){
        xo24f3 = -15;
        yo24f3 = -15;
        da2f3 = da2f3+4;
      }
      if(dist(xa2f3,ya2f3,xo25f3,yo25f3)<=(7.5+da2f3/2)){
        xo25f3 = -15;
        yo25f3 = -15;
        da2f3 = da2f3+4;
      }
      if(dist(xa2f3,ya2f3,xo26f3,yo26f3)<=(7.5+da2f3/2)){
        xo26f3 = -15;
        yo26f3 = -15;
        da2f3 = da2f3+4;
      }
    //colisao adversario3
      if(dist(xa3f3,ya3f3,xo21f3,yo21f3)<=(7.5+da3f3/2)){
        xo21f3 = -15;
        yo21f3 = -15;
        da3f3 = da3f3+4;
      }
      if(dist(xa3f3,ya3f3,xo22f3,yo22f3)<=(7.5+da3f3/2)){
        xo22f3 = -15;
        yo22f3 = -15;
        da3f3 = da3f3+4;
      }
      if(dist(xa3f3,ya3f3,xo23f3,yo23f3)<=(7.5+da3f3/2)){
        xo23f3 = -15;
        yo23f3 = -15;
        da3f3 = da3f3+4;
      }
      if(dist(xa3f3,ya3f3,xo24f3,yo24f3)<=(7.5+da3f3/2)){
        xo24f3 = -15;
        yo24f3 = -15;
        da3f3 = da3f3+4;
      }
      if(dist(xa3f3,ya3f3,xo25f3,yo25f3)<=(7.5+da3f3/2)){
        xo25f3 = -15;
        yo25f3 = -15;
        da3f3 = da3f3+4;
      }
      if(dist(xa3f3,ya3f3,xo26f3,yo26f3)<=(7.5+da3f3/2)){
        xo26f3 = -15;
        yo26f3 = -15;
        da3f3 = da3f3+4;
      }
      //35 seg
      if(contframe>=2100){
        fill(255,0,255);
        stroke(0,0,0);
        circle(xo27f3,yo27f3,15)
      }
      if(contframe>=2100){
        fill(255,0,255);
        stroke(0,0,0);
        circle(xo28f3,yo28f3,15)
      }
      if(contframe>=2100){
        fill(255,0,255);
        stroke(0,0,0);
        circle(xo29f3,yo29f3,15)
      }
      if(contframe>=2100){
        fill(255,0,255);
        stroke(0,0,0);
        circle(xo30f3,yo30f3,15)
      }
      if(contframe>=2100){
        fill(255,0,255);
        stroke(0,0,0);
        circle(xo31f3,yo31f3,15)
      }
    //colisão do usuario
      if(dist(xuf3,yuf3,xo27f3,yo27f3)<=(7.5+duf3/2)){
        xo27f3 = -15;
        yo27f3 = -15;
        duf3 = duf3+5;
      }
      if(dist(xuf3,yuf3,xo28f3,yo28f3)<=(7.5+duf3/2)){
        xo28f3 = -15;
        yo28f3 = -15;
        duf3 = duf3+5;
      }
      if(dist(xuf3,yuf3,xo29f3,yo29f3)<=(7.5+duf3/2)){
        xo29f3 = -15;
        yo29f3 = -15;
        duf3 = duf3+5;
      }
      if(dist(xuf3,yuf3,xo30f3,yo30f3)<=(7.5+duf3/2)){
        xo30f3 = -15;
        yo30f3 = -15;
        duf3 = duf3+5;
      }
      if(dist(xuf3,yuf3,xo31f3,yo31f3)<=(7.5+duf3/2)){
        xo31f3 = -15;
        yo31f3 = -15;
        duf3 = duf3+5;
      }
    //colisão adversario1
      if(dist(xa1f3,ya1f3,xo27f3,yo27f3)<=(7.5+da1f3/2)){
        xo27f3 = -15;
        yo27f3 = -15;
        da1f3 = da1f3+5;
      }
      if(dist(xa1f3,ya1f3,xo28f3,yo28f3)<=(7.5+da1f3/2)){
        xo28f3 = -15;
        yo28f3 = -15;
        da1f3 = da1f3+5;
      }
      if(dist(xa1f3,ya1f3,xo29f3,yo29f3)<=(7.5+da1f3/2)){
        xo29f3 = -15;
        yo29f3 = -15;
        da1f3 = da1f3+5;
      }
      if(dist(xa1f3,ya1f3,xo30f3,yo30f3)<=(7.5+da1f3/2)){
        xo30f3 = -15;
        yo30f3 = -15;
        duf3 = duf3+5;
      }
      if(dist(xa1f3,ya1f3,xo31f3,yo31f3)<=(7.5+da1f3/2)){
        xo31f3 = -15;
        yo31f3 = -15;
        da1f3 = da1f3+5;
      }
    //colisao adversario2
      if(dist(xa2f3,ya2f3,xo27f3,yo27f3)<=(7.5+da2f3/2)){
        xo27f3 = -15;
        yo27f3 = -15;
        da2f3 = da2f3+5;
      }
      if(dist(xa2f3,ya2f3,xo28f3,yo28f3)<=(7.5+da2f3/2)){
        xo28f3 = -15;
        yo28f3 = -15;
        da2f3 = da2f3+5;
      }
      if(dist(xa2f3,ya2f3,xo29f3,yo29f3)<=(7.5+da2f3/2)){
        xo29f3 = -15;
        yo29f3 = -15;
        da2f3 = da2f3+5;
      }
      if(dist(xa2f3,ya2f3,xo30f3,yo30f3)<=(7.5+da2f3/2)){
        xo30f3 = -15;
        yo30f3 = -15;
        da2f3 = da2f3+5;
      }
      if(dist(xa2f3,ya2f3,xo31f3,yo31f3)<=(7.5+da2f3/2)){
        xo31f3 = -15;
        yo31f3 = -15;
        da2f3 = da2f3+5;
      }
    //colisao adversario3
      if(dist(xa3f3,ya3f3,xo27f3,yo27f3)<=(7.5+da3f3/2)){
        xo27f3 = -15;
        yo27f3 = -15;
        da3f3 = da3f3+5;
      }
      if(dist(xa3f3,ya3f3,xo28f3,yo28f3)<=(7.5+da3f3/2)){
        xo28f3 = -15;
        yo28f3 = -15;
        da3f3 = da3f3+5;
      }
      if(dist(xa3f3,ya3f3,xo29f3,yo29f3)<=(7.5+da3f3/2)){
        xo29f3 = -15;
        yo29f3 = -15;
        da3f3 = da3f3+5;
      }
      if(dist(xa3f3,ya3f3,xo30f3,yo30f3)<=(7.5+da3f3/2)){
        xo30f3 = -15;
        yo30f3 = -15;
        da3f3 = da3f3+5;
      }
      if(dist(xa3f3,ya3f3,xo31f3,yo31f3)<=(7.5+da3f3/2)){
        xo31f3 = -15;
        yo31f3 = -15;
        da3f3 = da3f3+5;
      }
      //45 seg
      if(contframe>=2700){
        fill(120,120,120);
        stroke(0,0,0);
        circle(xo32f3,yo32f3,15)
      }
      if(contframe>=2700){
        fill(120,120,120);
        stroke(0,0,0);
        circle(xo33f3,yo33f3,15)
      }
      if(contframe>=2700){
        fill(120,120,120);
        stroke(0,0,0);
        circle(xo34f3,yo34f3,15)
      }
      if(contframe>=2700){
        fill(120,120,120);
        stroke(0,0,0);
        circle(xo35f3,yo35f3,15);
      }
      if(contframe>=2700){
        fill(120,120,120);
        stroke(0,0,0);
        circle(xo36f3,yo36f3,15)
      }
    //colisao usuario
      if(dist(xuf3,yuf3,xo32f3,yo32f3)<=(7.5+duf3/2)){
        xo32f3 = -15;
        yo32f3 = -15;
        duf3 = duf3+6;
      }
      if(dist(xuf3,yuf3,xo33f3,yo33f3)<=(7.5+duf3/2)){
        xo33f3 = -15;
        yo33f3 = -15;
        duf3 = duf3+6;
      }
      if(dist(xuf3,yuf3,xo34f3,yo34f3)<=(7.5+duf3/2)){
        xo34f3 = -15;
        yo34f3 = -15;
        duf3 = duf3+6;
      }
      if(dist(xuf3,yuf3,xo35f3,yo35f3)<=(7.5+duf3/2)){
        xo35f3 = -15;
        yo35f3 = -15;
        duf3 = duf3+6;
      }
      if(dist(xuf3,yuf3,xo36f3,yo36f3)<=(7.5+duf3/2)){
        xo36f3 = -15;
        yo36f3 = -15;
        duf3 = duf3+6;
      }
    //colisao adversario1
      if(dist(xa1f3,ya1f3,xo32f3,yo32f3)<=(7.5+da1f3/2)){
        xo32f3 = -15;
        yo32f3 = -15;
        da1f3 = da1f3+6;
      }
      if(dist(xa1f3,ya1f3,xo33f3,yo33f3)<=(7.5+da1f3/2)){
        xo33f3 = -15;
        yo33f3 = -15;
        da1f3 = da1f3+6;
      }
      if(dist(xa1f3,ya1f3,xo34f3,yo34f3)<=(7.5+da1f3/2)){
        xo34f3 = -15;
        yo34f3 = -15;
        da1f3 = da1f3+6;
      }
      if(dist(xa1f3,ya1f3,xo35f3,yo35f3)<=(7.5+da1f3/2)){
        xo35f3 = -15;
        yo35f3 = -15;
        da1f3 = da1f3+6;
      }
      if(dist(xa1f3,ya1f3,xo36f3,yo36f3)<=(7.5+da1f3/2)){
        xo36f3 = -15;
        yo36f3 = -15;
        da1f3 = da1f3+6;
      }
    //colisao usuario2
      if(dist(xa2f3,ya2f3,xo32f3,yo32f3)<=(7.5+da2f3/2)){
        xo32f3 = -15;
        yo32f3 = -15;
        da2f3 = da2f3+6;
      }
      if(dist(xa2f3,ya2f3,xo33f3,yo33f3)<=(7.5+da2f3/2)){
        xo33f3 = -15;
        yo33f3 = -15;
        da2f3 = da2f3+6;
      }
      if(dist(xa2f3,ya2f3,xo34f3,yo34f3)<=(7.5+da2f3/2)){
        xo34f3 = -15;
        yo34f3 = -15;
        da2f3 = da2f3+6;
      }
      if(dist(xa2f3,ya2f3,xo35f3,yo35f3)<=(7.5+da2f3/2)){
        xo35f3 = -15;
        yo35f3 = -15;
        da2f3 = da2f3+6;
      }
      if(dist(xa2f3,ya2f3,xo36f3,yo36f3)<=(7.5+da2f3/2)){
        xo36f3 = -15;
        yo36f3 = -15;
        da2f3 = da2f3+6;
      }
      //55 seg
      if(contframe>=2700){
        fill(255,255,255);
        stroke(0,0,0);
        circle(xo37f3,yo37f3,15)
      }
      if(contframe>=2700){
        fill(255,255,255);
        stroke(0,0,0);
        circle(xo38f3,yo38f3,15)
      }
      if(contframe>=2700){
        fill(255,255,255);
        stroke(0,0,0);
        circle(xo39f3,yo39f3,15)
      }
      if(contframe>=2700){
        fill(255,255,255);
        stroke(0,0,0);
        circle(xo40f3,yo40f3,15)
      }
    //colisao usuario
      if(dist(xuf3,yuf3,xo37f3,yo37f3)<=(7.5+duf3/2)){
        xo37f3 = -15;
        yo37f3 = -15;
        duf3 = duf3+7;
      }
      if(dist(xuf3,yuf3,xo38f3,yo38f3)<=(7.5+duf3/2)){
        xo38f3 = -15;
        yo38f3 = -15;
        duf3 = duf3+7;
      }
      if(dist(xuf3,yuf3,xo39f3,yo39f3)<=(7.5+duf3/2)){
        xo39f3 = -15;
        yo39f3 = -15;
        duf3 = duf3+7;
      }
      if(dist(xuf3,yuf3,xo40f3,yo40f3)<=(7.5+duf3/2)){
        xo40f3 = -15;
        yo40f3 = -15;
        duf3 = duf3+7;
      }
    //colisaoadversario1
      if(dist(xa1f3,ya1f3,xo37f3,yo37f3)<=(7.5+da1f3/2)){
        xo37f3 = -15;
        yo37f3 = -15;
        da1f3 = da1f3+7;
      }
      if(dist(xa1f3,ya1f3,xo38f3,yo38f3)<=(7.5+da1f3/2)){
        xo38f3 = -15;
        yo38f3 = -15;
        da1f3 = da1f3+7;
      }
      if(dist(xa1f3,ya1f3,xo39f3,yo39f3)<=(7.5+da1f3/2)){
        xo39f3 = -15;
        yo39f3 = -15;
        da1f3 = da1f3+7;
      }
      if(dist(xa1f3,ya1f3,xo40f3,yo40f3)<=(7.5+da1f3/2)){
        xo40f3 = -15;
        yo40f3 = -15;
        da1f3 = da1f3+7;
      }
    //colisaoadversario2
      if(dist(xa2f3,ya2f3,xo37f3,yo37f3)<=(7.5+da2f3/2)){
        xo37f3 = -15;
        yo37f3 = -15;
        da2f3 = da2f3+7;
      }
      if(dist(xa2f3,ya2f3,xo38f3,yo38f3)<=(7.5+da2f3/2)){
        xo38f3 = -15;
        yo38f3 = -15;
        da2f3 = da2f3+7;
      }
      if(dist(xa2f3,ya2f3,xo39f3,yo39f3)<=(7.5+da2f3/2)){
        xo39f3 = -15;
        yo39f3 = -15;
        da2f3 = da2f3+7;
      }
      if(dist(xa2f3,ya2f3,xo40f3,yo40f3)<=(7.5+da2f3/2)){
        xo40f3 = -15;
        yo40f3 = -15;
        da2f3 = da2f3+7;
      }
    //colisaoadversario3
      if(dist(xa3f3,ya3f3,xo37f3,yo37f3)<=(7.5+da3f3/2)){
        xo37f3 = -15;
        yo37f3 = -15;
        da3f3 = da3f3+7;
      }
      if(dist(xa3f3,ya3f3,xo38f3,yo38f3)<=(7.5+da3f3/2)){
        xo38f3 = -15;
        yo38f3 = -15;
        da3f3 = da3f3+7;
      }
      if(dist(xa3f3,ya3f3,xo39f3,yo39f3)<=(7.5+da3f3/2)){
        xo39f3 = -15;
        yo39f3 = -15;
        da3f3 = da3f3+7;
      }
      if(dist(xa3f3,ya3f3,xo40f3,yo40f3)<=(7.5+da3f3/2)){
        xo40f3 = -15;
        yo40f3 = -15;
        da3f3 = da3f3+7;
      }
  //colisao entre adversarios
      //usurario adv1
      if(dist(xuf3,yuf3,xa1f3,ya1f3)<=(duf3/2+da1f3/2)){
        if(duf3>da1f3){
          xa1f3 = -200;
          ya1f3 = -200;
          duf3 = duf3+5;
        }
        if(duf3<da1f3){
          xuf3 = -100;
          yuf3 = -100;
          da1f3 = da1f3+5;
        }
      }
      //usuario adv2
      if(dist(xuf3,yuf3,xa2f3,ya2f3)<=(duf3/2+da2f3/2)){
        if(duf3>da2f3){
          xa2f3 = -300;
          ya2f3 = -300;
          duf3 = duf3+5;
        }
        if(duf3<da2f3){
          xuf3 = -100;
          yuf3 = -100;
          da2f3 = da2f3+5;
        }
      }
      //usuario adv3
      if(dist(xuf3,yuf3,xa3f3,ya3f3)<=(duf3/2+da3f3/2)){
        if(duf3>da3f3){
          xa3f3 = -400;
          ya3f3 = -400;
          duf3 = duf3+5;
        }
        if(duf3<da3f3){
          xuf3 = -100;
          yuf3 = -100;
          da3f3 = da3f3+5;
        }
      }
      //adv1 adv2
      if(dist(xa1f3,ya1f3,xa2f3,ya2f3)<=(da1f3/2+da2f3/2)){
        if(da1f3>da2f3){
          xa2f3 = -300;
          ya2f3 = -300;
          da1f3 = da1f3+5;
        }
        if(da1f3<da2f3){
          xa1f3 = -200;
          ya1f3 = -200;
          da2f3 = da1f3+5;
        }
      }
      //adv1 adv3
      if(dist(xa1f3,ya1f3,xa3f3,ya3f3)<=(da1f3/2+da3f3/2)){
        if(da1f3>da3f3){
          xa3f3 = -400;
          ya3f3 = -400;
          da1f3 = da1f3+5;
        }
        if(da1f3<da3f3){
          xa1f3 = -200;
          ya1f3 = -200;
          da3f3 = da3f3+5;
        }
      }
      //adv2 adv3
      if(dist(xa2f3,ya2f3,xa3f3,ya3f3)<=(da2f3/2+da3f3/2)){
        if(da2f3>da3f3){
          xa3f3 = -400;
          ya3f3 = -400;
          da2f3 = da2f3+5;
        }
        if(da2f3<da3f3){
          xa2f3 = -300;
          ya2f3 = -300;
          da3f3 = da3f3+5;
        }
      }
  //terminou
    if(xa1f3==-200 && ya1f3==-200 && xa2f3==-300 && ya2f3==-300 && xa3f3==-400 && ya3f3==-400){
      tela=1.132;
      xuf3 = random(12.5,371.5);
      yuf3 = random(12.5,203.5);
      xa1f3 = random(396.5,755.5);
      ya1f3 = random(12.5,203.5);
      xa2f3 = random(12.5,371.5);
      ya2f3 = random(228.5,419.5);
      xa3f3 = random(396.5,755.5);
      ya3f3 = random(228.5,419.5);
      duf3 = 25;
      da1f3 = 25;
      da2f3 = 25;
      da3f3 = 25;
      
    }
  //gameover
    if(xuf3==-100 && yuf3==-100){
      tela=1.133;
      xuf3 = random(12.5,371.5);
      yuf3 = random(12.5,203.5);
      xa1f3 = random(396.5,755.5);
      ya1f3 = random(12.5,203.5);
      xa2f3 = random(12.5,371.5);
      ya2f3 = random(228.5,419.5);
      xa3f3 = random(396.5,755.5);
      ya3f3 = random(228.5,419.5);
      duf3 = 25;
      da1f3 = 25;
      da2f3 = 25;
      da3f3 = 25;
    }
}
function fase3c(){
  textSize(25);
  strokeWeight(2);
  stroke(0,0,0);
  fill(255,255,255);
  text('Parabéns você passou por todas as fases do capitalismo com su-\ncesso. Primeiramente passamos pelo captalismo comercial na sua \nprimeira fase. Depois tivemos a segunda fase do capitalismo, o in-\ndustrial, e por fim o capitalismo financeiro.\nParabens!! ',10,30);
  //prosseguir
  stroke(255, 255, 0);
  if(mouseX>=135 && mouseX<=285 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(135, 305, 150, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 3
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Créditos', 145, 345);
  //retornar
  stroke(255, 255, 0);
  if(mouseX>=435 && mouseX<=580 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(435, 310, 145, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 0
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Menu', 445, 345);
  tempo = 0;
  contframe = 0;
}
function fase3d(){
  textSize(25);
  fill(255,255,255);
  strokeWeight(2);
  stroke(0,0,0);
  text('Que pena, tente novamente. Uma dica é correr atraz dos pontos e \ndepois "engolir" seus concorrentes. Boa sorte',15,30);
  //prosseguir
  stroke(255, 255, 0);
  if(mouseX>=135 && mouseX<=310 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(135, 310, 175, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.131
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Retornar', 145, 345);
  //retornar
  stroke(255, 255, 0);
  if(mouseX>=435 && mouseX<=580 && mouseY>=310 && mouseY<=365){
    fill(0);
    rect(435, 310, 145, 55, 17);
    fill(255, 255, 255);
    if (mouseIsPressed) {
        tela = 1.1
      }
  }
  textSize(32);
  strokeWeight(2);
  stroke(0,0,0);
  text('Fases', 445, 345);
  tempo = 0;
  contframe = 0;
}
function setup() {
  createCanvas(768, 432);
  //fase1
  xc = random(10,758);
  yc = random(10,422);
  xc2 = random(10,758);
  yc2 = random(10,422);
  xc3 = random(10,758);
  yc3 = random(10,422);
  xcr = random(0, 9);
  ycr = random(0, 9);
  xc2r = random(0, 9);
  yc2r = random(0, 9);
  xc3r = random(0, 9);
  yc3r = random(0, 9);
  //fase2
  yof2 = -15;
  xof2 = random(15, 753);
  //fase3
  xuf3 = random(12.5,371.5);
  yuf3 = random(12.5,203.5);
  xa1f3 = random(396.5,755.5);
  ya1f3 = random(12.5,203.5);
  xa2f3 = random(12.5,371.5);
  ya2f3 = random(228.5,419.5);
  xa3f3 = random(396.5,755.5);
  ya3f3 = random(228.5,419.5);
    //objetos
    xo1f3 = random(12.5,755.5);
    yo1f3 = random(12.5,419.5);
    xo2f3 = random(12.5,755.5);
    yo2f3 = random(12.5,419.5);
    xo3f3 = random(12.5,755.5);
    yo3f3 = random(12.5,419.5);
    xo4f3 = random(12.5,755.5);
    yo4f3 = random(12.5,419.5);
    xo5f3 = random(12.5,755.5);
    yo5f3 = random(12.5,419.5);
    xo6f3 = random(12.5,755.5);
    yo6f3 = random(12.5,419.5);
    xo7f3 = random(12.5,755.5);
    yo7f3 = random(12.5,419.5);
    xo8f3 = random(12.5,755.5);
    yo8f3 = random(12.5,419.5);
    xo9f3 = random(12.5,755.5);
    yo9f3 = random(12.5,419.5);
    xo10f3 = random(12.5,755.5);
    yo10f3 = random(12.5,419.5);
    xo11f3 = random(12.5,755.5);
    yo11f3 = random(12.5,419.5);
    xo12f3 = random(12.5,755.5);
    yo12f3 = random(12.5,419.5);
    xo13f3 = random(12.5,755.5);
    yo13f3 = random(12.5,419.5);
    xo14f3 = random(12.5,755.5);
    yo14f3 = random(12.5,419.5);
    xo15f3 = random(12.5,755.5);
    yo15f3 = random(12.5,419.5);
    xo16f3 = random(12.5,755.5);
    yo16f3 = random(12.5,419.5);
    xo17f3 = random(12.5,755.5);
    yo17f3 = random(12.5,419.5);
    xo18f3 = random(12.5,755.5);
    yo18f3 = random(12.5,419.5);
    xo19f3 = random(12.5,755.5);
    yo19f3 = random(12.5,419.5);
    xo20f3 = random(12.5,755.5);
    yo20f3 = random(12.5,419.5);
    xo21f3 = random(12.5,419.5);
    yo21f3 = random(12.5,419.5);
    xo22f3 = random(12.5,755.5);
    yo22f3 = random(12.5,419.5);
    xo23f3 = random(12.5,755.5);
    yo23f3 = random(12.5,419.5);
    xo24f3 = random(12.5,755.5);
    yo24f3 = random(12.5,419.5);
    xo25f3 = random(12.5,755.5);
    yo25f3 = random(12.5,419.5);
    xo26f3 = random(12.5,755.5);
    yo26f3 = random(12.5,419.5);
    xo27f3 = random(12.5,755.5);
    yo27f3 = random(12.5,419.5);
    xo28f3 = random(12.5,755.5);
    yo28f3 = random(12.5,419.5);
    xo29f3 = random(12.5,755.5);
    yo29f3 = random(12.5,419.5);
    xo30f3 = random(12.5,755.5);
    yo30f3 = random(12.5,419.5);
    xo31f3 = random(12.5,755.5);
    yo31f3 = random(12.5,419.5);
    xo32f3 = random(12.5,755.5);
    yo32f3 = random(12.5,419.5);
    xo33f3 = random(12.5,755.5);
    yo33f3 = random(12.5,419.5);
    xo34f3 = random(12.5,755.5);
    yo34f3 = random(12.5,419.5);
    xo35f3 = random(12.5,755.5);
    yo35f3 = random(12.5,419.5);
    xo36f3 = random(12.5,755.5);
    yo36f3 = random(12.5,419.5);
    xo37f3 = random(12.5,755.5);
    yo37f3 = random(12.5,419.5);
    xo38f3 = random(12.5,755.5);
    yo38f3 = random(12.5,419.5);
    xo39f3 = random(12.5,755.5);
    yo39f3 = random(12.5,419.5);
    xo40f3 = random(12.5,755.5);
    yo40f3 = random(12.5,419.5);
    //
  //tempo
  frameRate(60);
}
function draw() {
  background(imgbg);
  if(tela==0){
    menu();
  }
  if(tela==1){
    jogar();
  }
  if(tela==1.1){
    fases();
  }
  if(tela==1.11){
    fase1a()
  }
  if(tela==1.111){
    fase1b()
  }
  if(tela==1.112){
    fase1c();
  }
  if(tela==1.113){
    fase1d();
  }
  if(tela==1.12){
    fase2a();
  }
  if(tela==1.121){
    fase2b();
  }
  if(tela==1.122){
    fase2c();
  }
  if(tela==1.123){
    fase2d();
  }
  if(tela==1.13){
    fase3a();
  }
  if(tela==1.131){
    fase3b();
  }
  if(tela==1.132){
    fase3c();
  }
  if(tela==1.133){
    fase3d();
  }
  if(tela==2){
    instruçoes();
  }
  if(tela==3){
    creditos();
  }
  prosseguir = false;
}