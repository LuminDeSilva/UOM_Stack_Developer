#include<iostream>

using namespace std;

int main()
{
	int a,b,c,d,e,f,g,h,i,j;
	string set;
	
	cout<<"Enter the elements of set A : "<<endl;
	cin>>a>>c>>e>>g>>i;
	cout<<"Enter the elements of set B : "<<endl;
	cin>>b>>d>>f>>h>>j;
	system("PAUSE");
	
	cout<<"A ={("<<a<<","<< c<<","<< e<<","<< g<<","<< i<<")"<<endl;
	cout<<"B ={("<<b<<","<< d<<","<< f<<","<< h<<","<< j<<")"<<endl;
	
	cout<<"Enter the prefered order of set : "<<endl;
	cin>>set;
	system("PAUSE");
	
	
	if(set=="A*B")
		{
			cout<<"R ={("<<a<<","<< b<<"),("<< c<<","<< d<<"),("<< e<<","<< f<<"),("<< g<<","<< h<<"),("<< i<<","<< j<<")}"<<endl; 
		}
	else if(set=="B*A")
		{
			cout<<"R ={("<<b<<","<< a<<"),("<< d<<","<< c<<"),("<< f<<","<< e<<"),("<< h<<","<< g<<"),("<< j<<","<< i<<")}"<<endl; 
		}	
	else
		{
			cout<<"Wrong statement"<<endl;
		}	
	cout<<endl;	
	
	if((a==b)||(c==d)||(e==f)||(g==h)||(i==j))
		{
			cout<<"This is a reflexive relation"<<endl;	
		}	
	else
		{
			cout<<"Not a reflexive relation"<<endl;
		}	
	
	if(((a==d)&&(b==c))||((e==h)&&(f==g)))
		{
			cout<<"This is a symmetric relation"<<endl;
		}
	else if(((a==f)&&(b==e))||((c==h)&&(d==g)))	
		{
			cout<<"This is a symmetric relation"<<endl;	
		}	
	else if(((a==j)&&(b==i))||((c==h)&&(d==g)))
		{
			cout<<"This is a symmetric relation"<<endl;
		}	
	else
		{
			cout<<"This is not a symmetric relation"<<endl;
		}
		
	if(((a==e)&&(b==c)&&(d==f))||((c==g)&&(d==c)&&(f==h))||((e==i)&&(f==g)&&(h==j)))
		{
			cout<<"This is a transitive"<<endl;	
		}	
	else if	(((c==g)&&(d==e)&&(f==h))||((e==i)&&(f==g)&&(h==j))||((i==c)&&(j==a)&&(b==d)))
		{
			cout<<"This is a transitive"<<endl;		
		}
	else if(((g==c)&&(h==e)&&(d==f))||((e==c)&&(f==a)&&(b==d))||((c==i)&&(d==g)&&(h==j)))	
		{
			cout<<"This is a transitive"<<endl;	
		}
	else
		{
			cout<<"This is a not transitive"<<endl;		
		}	
	
		
			
		
			
		

		
		
	
	

	



	return 0;	
}
