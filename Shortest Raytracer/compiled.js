w=512,U=1,d=Math,l=d.sqrt,m=d.max,n=1/w,p=document.getElementById("A"),t=p.getContext("2d"),u=t.getImageData(0,0,w,w),v=u.data;p.width=p.height=w;z=[1,[-3,1,8],9,0,0,0,1,[0,1,8],9,9,9,1,1,[3,1,8],0,0,9,.3],A=(a,b,e)=>{return[a[0]-b[0]*e,a[1]-b[1]*e,a[2]-b[2]*e]},D=(a,b)=>{return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},E=(a)=>{return A([0,0,0],a,-1/(B=l(D(a,a))))},F=()=>{f>n&&f<T&&(I=i||1,T=f,R=z[i+4]||0)},G=(a,b,e)=>{T=e;for(I=i=0;r=z[i++];i+=5)f=(f=D(c=A(z[i],a,1),b))-l(r*r-D(q=A(c,b,f),q)),F(),I==i&&(N=A(X=A(a,b,-T),z[i],1),C=z[I+U]);f=-D(a,r=[0,1,0])/D(b,r);F();I==i&&(X=A(a,b,-T),N=r,C=~~X[0]+~~X[2]&1?0:9);return I};H=(a,b,e)=>{if(!G(a,b,e))return 0;k=m(0,D(N,L=A([0,7,0],X,1)));return C*(1-R)*!G(X,E(L),B)*k*6E3/(13*D(L,L))+R*H(A(X,g=A(b,N,2*D(b,N)),-n),g,e)},J=0;for(y=h=w/2;y-- >-h;)for(x=-h;x++<h;){for(U=0;4>++U;)v[J++]=H([0,1,0],E([x/w,y/w,1]),w);v[J++]=255}t.putImageData(u,0,0);