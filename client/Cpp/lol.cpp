#include <iostream>
#include <algorithm>
#include <fstream>
#include <map>
using namespace std;

int main(){
    ofstream out("out.txt");
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.rdbuf(out.rdbuf());
    char s[100];
    s[3] = 'a';
    s[2] = 'b';
    s[1] = 'c';
    s[0] = 'd';
    s[4] = '\0';
    cout <<s<<endl;
    return 0;
}