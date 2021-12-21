#include <iostream>
#include <algorithm>
using namespace std;
 
const int N = 1e6;
 
int a[N];
 
int main(){
    int n;
    cin >> n;
    for(int i = 0; i < n;i++){
        cin >> a[i];
    }
    
    sort(a, a + n);
    int cnt = 1;
    for(int i = 1; i < n;i++){
        if(a[i] == a[i-1]) ++cnt;
        else{
            cout << "\nPhan tu " << a[i-1] << " xuat hien " << cnt << " lan!";
            cnt = 1;
        }
    }
    cout << "\nPhan tu " << a[n-1] << " xuat hien " << cnt << " lan!";
    
}