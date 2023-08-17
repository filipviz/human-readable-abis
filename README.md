# human-readable-abis

Write human-readable ABIs for a forge project to an output directory using [ABIType](https://abitype.dev/).

Useful when working with [Viem](https://viem.sh/), [WAGMI](https://wagmi.sh/), or [cast](https://book.getfoundry.sh/reference/cast/cast), or when writing docs.

## Usage

```bash
npm i # Install dependencies
node index.js /path/to/your/project
```

Output will be written to `./output`.

## Example

`IJBToken.txt`:

```
function approve(uint256, address _spender, uint256 _amount)
function balanceOf(address _account, uint256 _projectId) view returns (uint256)
function burn(uint256 _projectId, address _account, uint256 _amount)
function decimals() view returns (uint8)
function mint(uint256 _projectId, address _account, uint256 _amount)
function projectId() view returns (uint256)
function totalSupply(uint256 _projectId) view returns (uint256)
function transfer(uint256 _projectId, address _to, uint256 _amount)
function transferFrom(uint256 _projectId, address _from, address _to, uint256 _amount)
```
